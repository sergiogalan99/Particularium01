import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileTeacherPage } from './profileTeacher.page';

describe('ProfilePage', () => {
  let component: ProfileTeacherPage;
  let fixture: ComponentFixture<ProfileTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
