import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './models/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // créer une prop privée à la construction du fichier du hero service
  constructor(private messageService: MessageService) {}

  // méthode qui renvoie les héros ici via un observable de la classe Hero qui est un tableau
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes'); // message lorsque les héros sont récupérés
    return of(HEROES); // of(HEROES)renvoie un Observable<Hero[]>qui émet une valeur unique: le tableau des héros fictifs
  }

  // méthode qui renvoie un héro en fonction de l'ID
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
