import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ⬅️ IMPORTANTE!
import { games } from 'src/assets/Data/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  games = games; 

  constructor(private router: Router) {}

  irParaDetalhes(route: string) {
    this.router.navigate(['/', route]);
  }
}
