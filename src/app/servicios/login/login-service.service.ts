import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';
import { UserInt } from './../../interfaces/UserInt';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class LoginServiceService {
	private userReg: UserInt = {};
	private result: boolean = false;
	constructor(private afAuth: AuthService, private afStore: DataService,
		private routesv: Router, private servSingUp: SingUpServiceService) { }

	async logout() {
		this.afAuth.setUser(this.userReg);
		this.afAuth.logOut();
		return await this.afAuth
			.logOut()
			.then(() => {
				this.routesv.navigateByUrl('/home');
			})
			.catch((err) => {
				console.log(err); //Alerta
			});
	}

	async login() {
		this.afAuth.setUser(this.userReg);
		if (await this.afAuth.login()) {
			this.isMember();
		}
	}

	isMember() {

		this.$userReg.idUser = this.afAuth.getCurrentUserUid();
		console.log(this.$userReg);
		this.afAuth.setUser(this.$userReg);
		this.afStore.isMember(this.afAuth.getCurrentUserUid()).then((data) => {
			if (data) {
				this.servSingUp.$userReg = this.$userReg;
				console.log('isMember');
				this.afStore.isUser(this.afAuth.getCurrentUserUid()).then((data) => {
					if (data) {
						console.log('isUser');
						this.afStore.isStudent(this.afAuth.getCurrentUserUid()).then((data) => {
							if (data) {
								console.log('isStudent');
								this.routesv.navigateByUrl('/menu-demanda');
							} else {
								console.log('isTeacher');
								this.routesv.navigateByUrl('/menu');
							}
						});
					} else {
						console.log('Not isUser');

						this.afStore.isStudent(this.afAuth.getCurrentUserUid()).then((data) => {
							if (data) {
								console.log('isStudent');
								this.routesv.navigateByUrl('/profileStudent');
							} else {
								console.log('isTeacher');
								this.routesv.navigateByUrl('/profileTeacher');
							}
						});
					}
				});
			} else {
				console.log('Not isMenber');
				this.routesv.navigateByUrl('/tipo-usuario');
			}

		});
	}

	async eliminarUsuario() {
		this.afAuth.deleteUser();
	}


	/**
   * Getter $userReg
   * @return {User }
   */
	public get $userReg(): UserInt {
		return this.userReg;
	}

	/**
   * Setter $userReg
   * @param {User } value
   */
	public set $userReg(value: UserInt) {
		this.userReg = value;
	}
}
