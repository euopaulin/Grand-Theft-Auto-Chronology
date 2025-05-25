import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gta1',
  templateUrl: './gta1.component.html',
  styleUrls: ['./gta1.component.scss']
})
export class Gta1Component implements OnInit {

  ngOnInit(): void {
    console.log('GTA carregado');

    let current = 0;
    const images = document.querySelectorAll('.slide');

    setInterval(() => {
      if (images.length > 0) {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
      }
    }, 3000);
  }
}
