import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserActivitiesComponent } from './components/user-activities/user-activities.component';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-activities', component: UserActivitiesComponent},
  {path: '**', redirectTo: 'register', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
