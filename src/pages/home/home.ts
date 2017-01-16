import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sections: Array<any> = [];
  constructor(public navCtrl: NavController) {
    this.sections = [{
      icon: 'ios-alarm-outline',
      label: '流程',
    },{
      icon: 'ios-aperture-outline',
      label: '会议',
    },{
      icon: 'ios-briefcase-outline',
      label: '公文',
    },{
      icon: 'ios-cloud-outline',
      label: '计划',
    },{
      icon: 'ios-cube-outline',
      label: 'BI',
    }];
  }

  fowardTo(section) {
    
  }

}
