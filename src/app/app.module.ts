import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './core/guards';

import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './core/interceptor/index';
import { AppComponent } from './app.component';
import { ComponentsModule } from './core/components/index';
import { HomeComponent } from './features/home';
import { TestPageComponent } from './features/test/index';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        ComponentsModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TestPageComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };