import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileStudentPageRoutingModule } from './profileStudent-routing.module';

import { ProfileStudentPage } from './profileStudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileStudentPageRoutingModule
  ],
  declarations: [ProfileStudentPage]
})
export class ProfileStudentPageModule {}
