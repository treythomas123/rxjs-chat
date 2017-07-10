import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/webSocket';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages = Observable.webSocket('ws://localhost:5000');
  newMessage = '';

  constructor() {}

  sendMessage() {
    this.messages.next(JSON.stringify(this.newMessage));
    this.newMessage = '';
  }
}
