import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OAListPage } from '../oa-list/oa-list';
import { AddressBookPage } from '../address-book/address-book';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = OAListPage;
  tab3Root: any = AddressBookPage;
  tab4Root: any = SettingPage;

  constructor() {

  }
}
