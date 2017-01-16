import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the OAList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oa-list',
  templateUrl: 'oa-list.html'
})
export class OAListPage {

  tab1Root = LoginPage;
  tab2Root = LoginPage;
  states: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.states = ["待办", "已办", "请求", "归档", "抄送"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OAListPage');
  }

}
