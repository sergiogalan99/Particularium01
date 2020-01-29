import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login/login-service.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.page.html',
  styleUrls: ['./logged-in.page.scss'],
})
export class LoggedInPage implements OnInit {

  constructor(private logServ: LoginServiceService) { }

  ngOnInit() {
  }
  signOff(){
    this.logServ.logout();
  }
}
