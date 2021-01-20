import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // permet à l'app d'avoir fonctionnalité de routage
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component'; // donne au routeur un endroit où aller une fois les routes configurées
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // itinéraire par défaut
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // routeur dispo ds l'app
})
export class AppRoutingModule {}
