import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public events:Events) { }
  createUser(user) {
    console.log('User created!')
    this.events.publish('user:created', user , Date.now());
  }
}