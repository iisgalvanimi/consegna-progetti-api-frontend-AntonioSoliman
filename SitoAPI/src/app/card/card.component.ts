import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData: any;
  loading = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Recupera il parametro 'name' dalla URL (per esempio "jeweled-lotus")
    this.route.paramMap.subscribe(params => {
      const cardName = params.get('name')!;
      this.fetchCardData(cardName);
    });
  }

  fetchCardData(cardName: string): void {
    this.loading = true;
    const url = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`;
    this.http.get(url).subscribe(
      (data) => {
        this.cardData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nel recupero della carta', error);
        this.loading = false;
      }
    );
  }
}
