import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { AuthGuard, fakeBackendProvider } from './core/guards';

import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor, JwtInterceptor } from './core/interceptor/index';
import { AppComponent } from './app.component';
import { AlertComponent, ComponentsModule, ModalComponent } from './core/components/index';
import { HomeComponent } from './features/home';
import { TestPageComponent } from './features/test/index';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './features/login';;
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TestPageComponent,
    AlertComponent,
    ModalComponent
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {};