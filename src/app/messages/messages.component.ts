import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // messageService publique car sera liée et dc visible dans le modèle
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
