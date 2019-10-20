import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/AuthGuard';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ProfilePageComponentComponent } from './profile-page-component/profile-page-component.component';
import { ConnectionLogComponent } from './connection-log/connection-log.component';


const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: MainContainerComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfilePageComponentComponent
  },
  {
    path: 'logs',
    canActivate: [AuthGuard],
    component: ConnectionLogComponent
  },
  {
    path: '',
    component: HomeContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
