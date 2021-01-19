import { Injectable } from '@angular/core';

import { Hero } from './models/hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  // ajout méthode qui renvoie les héros (ici du mock mais pourrait être d'une API)
  getHeroes(): Hero[] {
    return HEROES;
  }
}
