import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ActualiteComponent } from './features/actualite/actualite.component';
import { AccueilComponent } from './features/accueil/accueil.component';
import { PlanningComponent } from './features/planning/planning.component';
import { BilleterieComponent } from './features/billeterie/billeterie.component';
import { AdminComponent } from './features/admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    AccueilComponent,
    PlanningComponent,
    BilleterieComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
