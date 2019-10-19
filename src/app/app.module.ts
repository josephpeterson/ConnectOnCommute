import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NearDevicesComponent } from './near-devices/near-devices.component';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { MatProgressSpinnerModule } from '@angular/material';

import { 
  WebBluetoothModule
} from '@manekinekko/angular-web-bluetooth';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContainerComponent,
    NearDevicesComponent,
    LoadingContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    WebBluetoothModule.forRoot({
      enableTracing: true // or false, this will enable logs in the browser's console
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
