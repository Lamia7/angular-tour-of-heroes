import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // permet à l'app d'avoir fonctionnalité de routage
import { HeroesComponent } from './heroes/heroes.component'; // donne au routeur un endroit où aller une fois les routes configurées

const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // routeur dispo ds l'app
})
export class AppRoutingModule {}
