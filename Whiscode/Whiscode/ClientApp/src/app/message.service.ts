import { Injectable } from '@angular/core';

export interface Message {
  subject: string;
  message: string;
}

@Injectable()
export class MessageService {
  messages: Message[] = [];

  add(subject: string, message: string) {
    this.messages.push({ subject: subject, message: message });
  }

  clear() {
    this.messages = [];
  }
}
