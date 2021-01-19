import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './models/hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  // méthode qui renvoie les héros ici via un observable de la classe Hero qui est un tableau
  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // of(HEROES)renvoie un Observable<Hero[]>qui émet une valeur unique: le tableau des héros fictifs
  }
}
