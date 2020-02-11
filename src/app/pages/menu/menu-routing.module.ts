import { ProfileTeacherPageModule } from './../profileTeacher/profileTeacher.module';
import { CreateOfertaPageModule } from './../create-oferta/create-oferta.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { MostrarOfertasPageModule } from '../mostrar-ofertas/mostrar-ofertas.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'create',
        loadChildren:  () => CreateOfertaPageModule
      },
      {
        path: 'editprofile',
        loadChildren: () => ProfileTeacherPageModule
      },
      {
        path: 'mostrar-ofertas',
        loadChildren: () => MostrarOfertasPageModule
      },
      {
        path: '',
        redirectTo: 'mostrar-ofertas',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
