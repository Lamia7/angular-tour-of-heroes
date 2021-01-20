import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // simple déclaration: prop heroes de type classe Hero[]
  selectedHero: Hero; // prop selectedHero de type Hero (pas encore de valeur de départ)

  // ajout d'un param privé de type HeroService au constructeur pr injecter le serv
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes(); // appeler cette méthode à l'init du composant
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; // affecte l'instance hero à selectedHero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // méthode qui récupère les héros du service
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
