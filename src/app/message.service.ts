import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // prop messages est de type tableau de string et contient comme valeur de départ un tableau vide

  // méthode d'ajout de message
  add(message: string): void {
    // void car fonction add ne renvoie aucune valeur
    this.messages.push(message);
  }

  // effacer message
  clear(): void {
    this.messages = [];
  }
}
