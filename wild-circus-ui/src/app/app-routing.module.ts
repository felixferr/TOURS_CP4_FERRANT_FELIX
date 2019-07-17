import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './features/accueil/accueil.component';
import { ActualiteComponent } from './features/actualite/actualite.component';
import { PlanningComponent } from './features/planning/planning.component';
import { BilleterieComponent } from './features/billeterie/billeterie.component';
import { AdminComponent } from './features/admin/admin.component';

const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'actu', component : ActualiteComponent},
  {path: 'planning', component : PlanningComponent},
  {path: 'billet', component : BilleterieComponent},
  {path: 'admin', component : AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
