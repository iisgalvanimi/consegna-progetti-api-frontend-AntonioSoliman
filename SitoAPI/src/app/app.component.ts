import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  searchCard(): void {
    if (this.searchTerm) {
      this.router.navigate([`/card/${this.searchTerm}`]);
    }
  }
}