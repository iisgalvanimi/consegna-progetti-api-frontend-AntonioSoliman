import { Component } from '@angular/core';

@Component({
  selector: 'app-frutti',
  templateUrl: './frutti.component.html',
  styleUrls: ['./frutti.component.css']
})
export class FruttiComponent {
  fruits = [
    { name: 'tuffa7a', emoji: '🍎' },
    { name: 'banan', emoji: '🍌' },
    { name: '3inab', emoji: '🍇' },
    { name: 'borti9al', emoji: '🍊' },
    { name: 'farawla', emoji: '🍓' },
    { name: 'della7', emoji: '🍉' },
    { name: 'khoukh', emoji: '🍑' },
    { name: 'anjas', emoji: '🍐' },
    { name: 'limon', emoji: '🍋' },
    { name: 'kiwi', emoji: '🥝' },
    { name: '7abb lmelloukh', emoji: '🍈' },
    { name: 'ananass', emoji: '🍍' }
  ];
  
}
