import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PlanningComponent } from './planning/planning.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    AccueilComponent,
    PlanningComponent,
    BilleterieComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
