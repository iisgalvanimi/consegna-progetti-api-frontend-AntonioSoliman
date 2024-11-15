import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'card/:name', component: CardComponent },
  { path: '', redirectTo: '/card/jeweled-lotus', pathMatch: 'full' }, // pagina di default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
