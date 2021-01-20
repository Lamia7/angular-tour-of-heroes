import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './models/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  // créer une prop privée à la construction du fichier du hero service
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

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
