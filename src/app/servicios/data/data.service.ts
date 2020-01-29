import { Teacher } from '../../core/model/teacher';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Student } from '../../core/model/student';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private afStoreSv: AngularFirestore) { 

	}

	addUserProfile(idUser: string, user: Teacher | Student) {
		return this.afStoreSv.collection('user').doc(idUser).set(Object.assign({}, user));
	}

	updateTeacherProfile(idUser: string, teacher: Teacher) {
		return this.afStoreSv
			.collection('user')
			.doc(idUser)
			.update({
				email: teacher.email
			})
			.then(function () {
				console.log('Document successfully updated!');
			});
	}

	updateStudentProfile(idUser: string, student: Student) {
		return this.afStoreSv
			.collection('user')
			.doc(idUser)
			.update({
				email: student.email
			})
			.then(function () {
				console.log('Document successfully updated!');
			});
	}

	addTeacherId(idUser: string) {
		console.log(idUser);
		return this.afStoreSv.collection('teachers').doc(idUser).set({idUser: idUser});
	}

	addStudentId(idUser: string) {
		console.log(idUser);
		return this.afStoreSv.collection('students').doc(idUser).set({idUser: idUser});
	}

	isTeacher(idUser: string) {
		return this.afStoreSv
			.collection('teachers', (ref) => ref.where('idUser', '==', idUser))
			.get()
			.toPromise()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					console.log("hola");
					return true;
				});
			})
			.catch(function (error) {
				console.log("hola");
				return false;
			});
			
	}
	isStudent(idUser: string) {
		return this.afStoreSv
			.collection('students', (ref) => ref.where('idUser', '==', idUser))
			.get()
			.toPromise()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					// doc.data() is never undefined for query doc snapshots
					return true;
				});
			})
			.catch(function (error) {
				return false;
			});
			
	}

	getProfile(idUser: string) {
		let user = this.afStoreSv.collection('user').doc(idUser).get();
		return user
			.toPromise()
			.then((doc) => {
				if (doc.exists) {
					return doc.data();
					console.log('Document data:', doc.data());
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function (error) {
				console.log('Error getting document:', error);
			});
	}
	addDemand() {
		//to do
	}
	getDemand() {
		//to do
	}
	getAllDemands() {
		//to do
	}
	addOffer() {
		//to do
	}
	getOffer() {
		//to do
	}
	getAllOffers() {
		//to do
	}
}
