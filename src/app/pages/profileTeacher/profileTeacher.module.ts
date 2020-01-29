import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ProfileTeacherPage } from './profileTeacher.page';
import { ProfileTeacherPageRoutingModule } from './profileTeacher-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTeacherPageRoutingModule
  ],
  declarations: [ProfileTeacherPage]
})
export class ProfileTeacherPageModule {}
