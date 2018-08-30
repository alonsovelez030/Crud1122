import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';

/* Sentry */
import * as Sentry from 'sentry-cordova';
Sentry.init({ dsn: 'https://0b527fa04ffd469ab78718f53b90906c@sentry.io/12718151271815' });

/* SharedModule (Pipes, Directives, Components) */
import { SharedModule } from '../shared/shared.module';
import { SentryIonicErrorHandler } from '../providers/sentry-ionic-error-handler/sentry-ionic-error-handler';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    SharedModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: SentryIonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
