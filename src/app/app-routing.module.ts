import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatsComponent } from './add-plats/add-plats.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { CommandePageComponent } from './commande-page/commande-page.component';
import { CommandesDetailsComponent } from './commandes-details/commandes-details.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeComponent } from './home/home.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { PlatDetailsComponent } from './plat-details/plat-details.component';
import { PlatsComponent } from './plats/plats.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessComponent } from './success/success.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:UserAuthComponent,
    path:'user-auth',
    
  },
  {
    component:PlatsComponent,
    path:'plats',
    canActivate:[AdminGuard]
  },
  {
    component:SignUpComponent,
    path:'sign-up'
  },
  {
    component:HomeUserComponent,
    path:'homeUser',
    canActivate:[AuthGuard]
  },
  {
    component:AddPlatsComponent,
    path:'addPlats',
    canActivate:[AdminGuard]
  },
  {
    component:UpdatePlatComponent,
    path:'updatePlat/:id',
    canActivate:[AdminGuard]
    
  },
  {
    component:PlatDetailsComponent,
    path:'details/:id',
    
  },
  {
    component:CommandePageComponent,
    path:'commandePage',
    
  }
  ,
  {
    component:SuccessComponent,
    path:'success',
    canActivate:[AuthGuard]
  },
  {
    component:MesCommandesComponent,
    path:'mesCommandes',
    canActivate:[AuthGuard]
  },
  {
    component:CommandesDetailsComponent,
    path:'LigneCommande/:id',
    canActivate:[AuthGuard]
  },
  {
    component:UsersComponent,
    path:'users',
    canActivate:[AdminGuard]
  },
  {
    component:UpdateUserComponent,
    path:'updateUser/:id',
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
