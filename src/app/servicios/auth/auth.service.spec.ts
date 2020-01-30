import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { TestBed, async } from '@angular/core/testing';

import { AuthService } from './auth.service';
import firebaseConfig from 'src/app/firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
      ],
      providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthService,
        AngularFireAuth]
    });
    service = TestBed.get(AuthService);
  }
  );
  let users = ["1234@gmail.com", "issamam@gmail.com", "calamonte"];
  let pass = ["1234", "issam", "masverde"];

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Logg', (async () => {
    let email: string = "1234@gmail.com";
    let pass: string = "123456A()";
    await service.regis(email, pass, pass);
    await service.log(email, pass).then((cosa) => {
      expect(cosa).toBeTruthy();
    });
  }));
  it('should SignUp', (async () => {
    let email: string = "issamasad@gmail.com";
    let pass: string = "202020A()";
    let passC: string = "202020A()";
    await service.regis(email, pass, passC).then((cosa) => {
      expect(cosa).toBeTruthy();
    });
    email = "issamasad@gmail.com";
    pass = "202020A()";
    passC = "202020A()";
    await service.regis(email, pass, passC).then((cosa) => {
      expect(cosa).toBeFalsy();
    });
    email = "1234@gmail.com";
    pass = "123456A()";
    passC = "123456b()";
    await service.regis(email, pass, passC).then((cosa) => {
      expect(cosa).toBeFalsy();
    });
  }));
});
