import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './features/accueil/accueil.component';
import { ActualiteComponent } from './features/actualite/actualite.component';
import { PlanningComponent } from './features/planning/planning.component';
import { BilleterieComponent } from './features/billeterie/billeterie.component';
import { AdminComponent } from './features/admin/admin.component';
import { LoginComponent } from './authentication/login/login.component';
import { PanierComponent } from './features/panier/panier.component';

const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'actu', component : ActualiteComponent},
  {path: 'planning', component : PlanningComponent},
  {path: 'billetterie/:id', component : BilleterieComponent},
  {path: 'admin', component : AdminComponent},
  {path: 'login', component : LoginComponent},
  {path: 'panier', component : PanierComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
