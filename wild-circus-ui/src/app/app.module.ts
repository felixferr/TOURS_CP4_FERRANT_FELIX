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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './authentication/login/login.component';
import { DropdowntoogleComponent } from './features/dropdowntoogle/dropdowntoogle.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { PanierComponent } from './features/panier/panier.component';

export function jwtTokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    AccueilComponent,
    PlanningComponent,
    BilleterieComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    DropdowntoogleComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
    }),
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['http://localhost:3000'],
        tokenGetter: jwtTokenGetter,
      },
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
