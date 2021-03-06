import {HomeComponent} from './account/home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ProfileComponent} from './main/profile/profile.component';
import {CreateDeclarationComponent} from './main/declarations/create-declaration/create-declaration.component';
import {ApplicationStateService} from './application-state.service';
import {ProfileSettingsComponent} from './main/profile/profile-settings/profile-settings.component';
import {ProfileProjectsComponent} from './main/profile/profile-projects/profile-projects.component';
import {ProfileClientsComponent} from './main/profile/profile-clients/profile-clients.component';
import {ProfileCarsComponent} from './main/profile/profile-cars/profile-cars.component';
import {AuthGuard} from './account/auth.guard';
import {DashboardComponent} from './main/dashboard/dashboard.component';
import {DeclarationsComponent} from './main/declarations/declarations.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {animation: 'HomePage'} },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: {animation: 'ProfPage'} , children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full'},
      { path: 'settings', component: ProfileSettingsComponent},
      { path: 'projects', component: ProfileProjectsComponent, },
      { path: 'clients', component: ProfileClientsComponent,  },
      { path: 'cars', component: ProfileCarsComponent}
    ] },
  { path: 'declarations', component: DeclarationsComponent, canActivate: [AuthGuard], data: {animation: 'DecPage'} },
  { path: 'declarations/new', component: CreateDeclarationComponent , canActivate: [AuthGuard], data: {animation: 'NewDecPage'}},
  { path: '**', redirectTo: '/home' }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes),  BrowserAnimationsModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
  public constructor(private router: Router,
                     private applicationStateService: ApplicationStateService) {
  }
}
