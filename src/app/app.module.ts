import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { CampaignsPageModule } from '../pages/campaigns/campaigns.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ReportsPageModule } from '../pages/reports/reports.module';
import { PaymentsPageModule } from '../pages/payments/payments.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { Facebook } from '@ionic-native/facebook';



@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    WelcomePageModule,
    ProfilePageModule,
    CampaignsPageModule,
    ReportsPageModule,
    PaymentsPageModule,
    ContactPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Facebook
  ]
})
export class AppModule {}
