import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the OADetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oa-detail',
  templateUrl: 'oa-detail.html'
})
export class OADetailPage {

  oa: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oa = navParams.get('oa');
  }

  back() {
    this.navCtrl.pop();
  }

}
