import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OADetailPage } from '../oa-detail/oa-detail';

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

  states: Array<any> = [];
  oaData: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.states = ["待办", "已办", "请求", "归档", "抄送"];
    this.oaData = [{
      icon: 'assets/images/logo.png',
      name: '流程名称',
      intro: '这是流程简介',
      author: '创建人',
      time: '2017-01-10',
    },{
      icon: 'assets/images/logo.png',
      name: '流程名称',
      intro: '这是流程简介',
      author: '创建人',
      time: '2017-01-10',
    },{
      icon: 'assets/images/logo.png',
      name: '流程名称',
      intro: '这是流程简介',
      author: '创建人',
      time: '2017-01-10',
    },{
      icon: 'assets/images/logo.png',
      name: '流程名称',
      intro: '这是流程简介',
      author: '创建人',
      time: '2017-01-10',
    },{
      icon: 'assets/images/logo.png',
      name: '流程名称',
      intro: '这是流程简介',
      author: '创建人',
      time: '2017-01-10',
    },{
      icon: 'assets/images/logo.png',
      name: '流程名称',
      intro: '这是流程简介',
      author: '创建人',
      time: '2017-01-10',
    },];
  }

  gotoOADetail(oa) {
    this.navCtrl.push(OADetailPage, {oa});
  }

}
