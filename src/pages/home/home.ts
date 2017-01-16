import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sections: Array<any> = [];
  constructor(public navCtrl: NavController) {
    this.sections = [{
      icon: 'assets/images/logo.png',
      label: '流程',
    },{
      icon: 'assets/images/logo.png',
      label: '会议',
    },{
      icon: 'assets/images/logo.png',
      label: '公文',
    },{
      icon: 'assets/images/logo.png',
      label: '计划',
    },{
      icon: 'assets/images/logo.png',
      label: 'BI',
    }];
  }

}
