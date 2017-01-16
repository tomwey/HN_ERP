import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    StatusBar.hide();
  }

}
