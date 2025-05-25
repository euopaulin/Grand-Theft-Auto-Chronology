import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { HomeComponent } from './pages/home/home.component';
import { Gta3Component } from './pages/gta3/gta3.component';
import { GtaSaComponent } from './pages/gta-sa/gta-sa.component';
import { GtaVComponent } from './pages/gta-v/gta-v.component';
import { GtaIvComponent } from './pages/gta-iv/gta-iv.component';
import { GtaVicecityComponent } from './pages/gta-vicecity/gta-vicecity.component';
import { Gta1Component } from './pages/gta1/gta1.component';
import { Gta2Component } from './pages/gta2/gta2.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    HomeComponent,
    Gta3Component,
    GtaSaComponent,
    GtaVComponent,
    GtaIvComponent,
    GtaVicecityComponent,
    Gta1Component,
    Gta2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
