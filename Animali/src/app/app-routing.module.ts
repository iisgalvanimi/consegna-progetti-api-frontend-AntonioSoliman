import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './animali/animali.component';
import { FruttiComponent } from './frutti/frutti.component';

const routes: Routes = [
  { path: 'animals', component: AnimaliComponent},
  { path: 'fruits', component: FruttiComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
