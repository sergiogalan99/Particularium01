import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTeacherPage } from './profileTeacher.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTeacherPageRoutingModule {}
