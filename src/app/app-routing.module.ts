import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '',
    data: {
      title: 'Home'
    },
    component: HomeComponent
  },
  { 
    path: 'profile',
    data: {
      title: 'Profile'
    },
    component: ProfileComponent
  },
  { 
    path: 'dashboard',
    data: {
      title: 'Dashboard'
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
