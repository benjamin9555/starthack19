import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PassengerPage } from '../pages/passenger/passenger';
import { DriverPage } from '../pages/driver/driver';
import { ConfirmPage } from '../pages/confirm/confirm';
import { InfoPage } from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PassengerPage,
    DriverPage,
    ConfirmPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PassengerPage,
    DriverPage,
    ConfirmPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}