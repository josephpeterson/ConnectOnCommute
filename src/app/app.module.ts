import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NearDevicesComponent } from './near-devices/near-devices.component';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { MatProgressSpinnerModule, MatError, MatDatepickerModule, MatCardModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatInputModule, MatSortModule, MatMenuModule, MatIconModule, MatListModule, MatToolbarModule, MatFormFieldModule, MatPaginatorModule, MatSelectModule, MatDialogModule, MatSliderModule, MatButtonModule, MatAutocompleteModule, MatNativeDateModule } from '@angular/material';

import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { AuthGuard } from 'src/guards/AuthGuard';
import { AquariumInterceptor } from 'src/services/auth.interceptor';
import { HomeContainerComponent } from './home-container/home-container.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { LoginModalComponent } from './modals/login-modal-component/login-modal-component.component';
import { ProfilePageComponentComponent } from './profile-page-component/profile-page-component.component';
import { StatusButtonComponent } from './status-button/status-button.component';
import { ConnectButtonComponent } from './connect-button/connect-button.component';
import { NotificationModalComponent } from './modals/notification-modal/notification-modal.component';
import { ConnectionHistogramComponent } from './connection-histogram/connection-histogram.component';
import { ConnectionLogComponent } from './connection-log/connection-log.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContainerComponent,
    NearDevicesComponent,
    LoadingContainerComponent,
    HomeContainerComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    LogoutButtonComponent,
    LoginModalComponent,
    ProfilePageComponentComponent,
    StatusButtonComponent,
    ConnectButtonComponent,
    NotificationModalComponent,
    ConnectionHistogramComponent,
    ConnectionLogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    MatSliderModule,
    MatButtonModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  entryComponents: [
    LoginModalComponent,
    NotificationModalComponent
  ],
  providers: [
    ConnectOnCommuteService,
    AuthService,
    AuthGuard,
    //Providers for authenticaion
    { provide: HTTP_INTERCEPTORS, useClass: AquariumInterceptor, multi: true },
    //{ provide: 'OAuth.Environment', useValue: environment.environmentTag },
    //{ provide: 'OAuth.ClientName', useValue: environment.appName },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
