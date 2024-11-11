import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './animali/animali.component';
import { FruttiComponent } from './frutti/frutti.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'animals', component: AnimaliComponent},
  { path: 'fruits', component: FruttiComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'generic/:id', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
