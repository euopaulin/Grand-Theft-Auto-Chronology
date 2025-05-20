import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const cursor = this.renderer.selectRootElement('#cursor', true);

    this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
      this.renderer.setStyle(cursor, 'left', event.clientX + 'px');
      this.renderer.setStyle(cursor, 'top', event.clientY + 'px');
    });
  }
}
