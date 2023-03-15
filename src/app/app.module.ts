import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { PlatsComponent } from './plats/plats.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeUserComponent } from './home-user/home-user.component';
import { AddPlatsComponent } from './add-plats/add-plats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlatDetailsComponent } from './plat-details/plat-details.component';
import { CommandePageComponent } from './commande-page/commande-page.component';
import { SuccessComponent } from './success/success.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { CommandesDetailsComponent } from './commandes-details/commandes-details.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserAuthComponent,
    PlatsComponent,
    SignUpComponent,
    HomeUserComponent,
    AddPlatsComponent,
    UpdatePlatComponent,
    PlatDetailsComponent,
    CommandePageComponent,
    SuccessComponent,
    MesCommandesComponent,
    CommandesDetailsComponent,
    UsersComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
