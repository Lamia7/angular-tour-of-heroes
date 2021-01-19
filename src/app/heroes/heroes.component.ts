import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES; // prop heroes de type classe Hero[] à qui on assigne HEROES:une constante qui a déjà une valeur (voir mock)
  selectedHero: Hero; // prop selectedHero de type Hero (pas encore de valeur de départ)

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero; // affecte l'instance hero à selectedHero
  }
}
