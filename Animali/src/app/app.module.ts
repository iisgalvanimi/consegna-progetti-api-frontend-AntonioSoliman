import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaliComponent } from './animali/animali.component';
import { FruttiComponent } from './frutti/frutti.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaliComponent,
    FruttiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
