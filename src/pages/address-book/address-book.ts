import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';

/*
  Generated class for the AddressBook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-address-book',
  templateUrl: 'address-book.html'
})
export class AddressBookPage {

  searchTerm: string = '';
  searchControl: FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }

  onSearchInput() {
    
  }

}
