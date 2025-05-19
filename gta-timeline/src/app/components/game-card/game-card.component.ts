import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
@Input() title!:string;
@Input() description!:string;
@Input() image!:string;
@Input() releaseDate!:string;
@Input() platforms!:string[];
}
