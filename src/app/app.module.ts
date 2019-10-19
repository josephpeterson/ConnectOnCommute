import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NearDevicesComponent } from './near-devices/near-devices.component';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { MatProgressSpinnerModule, MatError } from '@angular/material';

import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [ConnectOnCommuteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
