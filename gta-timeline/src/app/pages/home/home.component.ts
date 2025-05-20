import { Component } from '@angular/core';
import { games } from 'src/assets/Data/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  games = games; 
}
