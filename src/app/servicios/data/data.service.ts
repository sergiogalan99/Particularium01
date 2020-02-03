import { UserInt } from './../../interfaces/UserInt';
import { User } from 'src/app/core/model/user';
import { isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Student } from './../../core/model/student';
import { Teacher } from './../../core/model/teacher';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private students: AngularFirestoreCollection<UserInt>;
	private teachers: AngularFirestoreCollection<UserInt>;
	private demands: AngularFirestoreCollection<Demand>;
	private offers: AngularFirestoreCollection<Offer>;
	private users: AngularFirestoreCollection<User>;
	private userLogData:UserInt;
	private resultTeacher: boolean = false;
	private resultStudent: boolean = false;

	constructor(private afStoreSv: AngularFirestore) {
		this.students = this.afStoreSv.collection<UserInt>('students');
		this.teachers = this.afStoreSv.collection<UserInt>('teachers');
		this.demands = this.afStoreSv.collection<Demand>('demands');
		this.offers = this.afStoreSv.collection<Offer>('offers');
		this.users = this.afStoreSv.collection<User>('user');
		this.userLogData = {};
	}
	async isMember(idUser: string) {
		this.resultTeacher = false;
		await this.getTeacher(idUser).then((data) => {
			console.log(data);
			this.resultTeacher = data;
		});
		await this.getStudent(idUser).then((data) => {
			console.log(data);
			this.resultStudent = data;
		});

		console.log('isTeacher', this.resultTeacher, 'isStudent', this.resultStudent);
		if (this.resultTeacher || this.resultStudent) {
			return true;
		} else {
			return false;
		}
	}

	async getTeacher(idUser: string): Promise<boolean> {
		return await new Promise((resolve, reject) => {
			this.teachers.doc<User>(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					console.log('data student', data.email);
					resolve(true);
				} else {
					resolve(false);
				}
			}, reject);
		});
	}

	async getStudent(idUser: string): Promise<boolean> {
		return await new Promise((resolve, reject) => {
			this.students.doc<User>(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					console.log('data student', data.email);
					resolve(true);
				} else {
					resolve(false);
				}
			}, reject);
		});
	}

	addUserProfile(idUser: string, user: Teacher | Student) {
		return this.afStoreSv.collection('user').doc(idUser).set(Object.assign({}, user));
	}

	async updateTeacherProfile(idUser: string, teacher: Teacher) {
		return this.afStoreSv
			.collection('user')
			.doc(idUser)
			.update(teacher)
			.then(function() {
				console.log('Document successfully updated!');
			});
	}

	async updateStudentProfile(idUser: string, student: Student) {
		return this.afStoreSv
			.collection('user')
			.doc(idUser)
			.update(student)
			.then(function() {
				console.log('Document successfully updated!');
			});
	}

	addTeacherId(idUser: string) {
		this.userLogData.idUser = idUser;
		return this.afStoreSv.collection('teachers').doc(idUser).set(this.userLogData);
	}

	addStudentId(idUser: string) {
		this.userLogData.idUser = idUser;
		return this.afStoreSv.collection('students').doc(idUser).set(this.userLogData);
	}

	async getProfile(idUser: string) {
		return await new Promise((resolve, reject) => {
			this.users.doc<any>(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					console.log('data user', data);
					resolve(data);
				}
			}, reject);
		});
	}

	addDemand(idUser: string, demand: Demand) {
		return this.afStoreSv.collection('demands').doc(idUser).set(demand);
	}

	getAllDemands() {
		return this.demands.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				});
			})
		);
	}

	addOffer(idUser: string, demand: Offer) {
		return this.afStoreSv.collection('demands').doc(idUser).set(demand);
	}
	
	getAllOffers() {
		return this.offers.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				});
			})
		);
	}
	updateDemand(demand:Demand){
		return this.demands.doc().update(demand);
	}
}
