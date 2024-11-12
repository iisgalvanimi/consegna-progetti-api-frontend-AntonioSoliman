import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-foo',
 templateUrl: './foo.component.html',
 styleUrls: ['./foo.component.css']
})
export class FooComponent {
   data!: Object; //Il ‘!’ serve a creare variabili non inizializzate
   loading: boolean=false;
   o! :Observable<Object>;
   constructor(public http: HttpClient) {}
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }
   //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di 
   //makeRequest senza dichiarare la variabile Observable e creando l’arrow function   
   //direttamente dentro il metodo subscribe
   makeCompactRequest(): void {
     this.loading = true;
     this.http
       .get('https://jsonplaceholder.typicode.com/posts/1')
       .subscribe(newData => {
       this.data = newData;
       this.loading = false;
       });
      }
      makeCompactPost(): void {
        this.loading = true;
        this.http
          .post('https://jsonplaceholder.typicode.com/posts',
            JSON.stringify({
              body: 'bar',
              title: 'foo',
              userId: 1
            })
          )
          .subscribe(data => {
            this.data = data;
            this.loading = false;
          });
      }
}
