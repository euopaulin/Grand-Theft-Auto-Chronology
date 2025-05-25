import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Gta3Component } from './pages/gta3/gta3.component';
import { GtaSaComponent } from './pages/gta-sa/gta-sa.component';
import { GtaVComponent } from './pages/gta-v/gta-v.component';
import { GtaIvComponent } from './pages/gta-iv/gta-iv.component';
import { GtaVicecityComponent } from './pages/gta-vicecity/gta-vicecity.component';
import { Gta1Component } from './pages/gta1/gta1.component';
import { Gta2Component } from './pages/gta2/gta2.component';
import { Gta6Component } from './pages/gta6/gta6.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gta3', component: Gta3Component },
  { path: 'gta-sa', component: GtaSaComponent },
  { path: 'gta-v', component: GtaVComponent },
  { path: 'gta-iv', component: GtaIvComponent },
  { path: 'gta-vicecity', component: GtaVicecityComponent },
  { path: 'gta-1', component: Gta1Component },
  { path: 'gta-2', component: Gta2Component },
  { path: 'gta6', component: Gta6Component }, // ← vírgula adicionada aqui
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',           // ativa o scroll para âncoras (#id)
      scrollPositionRestoration: 'enabled'  // restaura posição ao navegar
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

