import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
    { path: 'dashboard', 
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
      { path: 'grafica1', component: Grafica1Component, data: {titulo: 'ProgressBar'}},
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Gráfica #1'}},
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de cuenta'}},
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}},     
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    },
    

];

@NgModule ({

   imports: [ RouterModule.forChild(routes)],
   exports: [ RouterModule]

})

export class PagesRoutingModule {}