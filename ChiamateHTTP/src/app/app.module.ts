import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooComponent } from './foo/foo.component'; //Importa Il modulo http

@NgModule({
 declarations: [
   AppComponent,
   FooComponent
 ],
 imports: [
   BrowserModule, HttpClientModule //Aggiungi il modulo http qui 
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }