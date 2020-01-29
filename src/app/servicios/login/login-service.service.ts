import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/UserInt';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private userReg: User = {};
  constructor(private afAuth: AuthService, private afStore: DataService, private routesv: Router) { }

  async logout() {
    this.afAuth.setUser(this.userReg);
    this.afAuth.logOut();
    return await this.afAuth.logOut().then(() => {
      this.routesv.navigateByUrl('/home');
    }).catch((err) => {
      console.log(err);//Alerta
    });
  }

  async login() {
    this.afAuth.setUser(this.userReg);
    return await this.afAuth.login().
      then(() => {
        console.log("Profesor: " + this.afStore.isTeacher(this.afAuth.getCurrentUserUid()))
        console.log("Alumno: " + this.afStore.isStudent(this.afAuth.getCurrentUserUid()))
        if (!this.afStore.isTeacher(this.afAuth.getCurrentUserUid()) && !this.afStore.isStudent(this.afAuth.getCurrentUserUid())) {
          return this.routesv.navigateByUrl('/tipo-usuario');
        }
        else {
          return this.routesv.navigateByUrl('/logged-in');
        }

      }).
      catch((err) => {
        console.log(err);//Alerta
      });
  }

  /**
   * Getter $userReg
   * @return {User }
   */
  public get $userReg(): User {
    return this.userReg;
  }

  /**
   * Setter $userReg
   * @param {User } value
   */
  public set $userReg(value: User) {
    this.userReg = value;
  }

}
