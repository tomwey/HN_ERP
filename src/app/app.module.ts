import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HNERPApp } from './app.component';
import { SettingPage } from '../pages/setting/setting';
import { OAListPage } from '../pages/oa-list/oa-list';
import { AddressBookPage } from '../pages/address-book/address-book';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OADetailPage } from '../pages/oa-detail/oa-detail';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    HNERPApp,
    SettingPage,
    OAListPage,
    AddressBookPage,
    HomePage,
    TabsPage,
    LoginPage,
    OADetailPage,
  ],
  imports: [
    IonicModule.forRoot(HNERPApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HNERPApp,
    SettingPage,
    OAListPage,
    AddressBookPage,
    HomePage,
    TabsPage,
    LoginPage,
    OADetailPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
