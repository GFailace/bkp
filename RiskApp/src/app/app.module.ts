import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RisksComponent } from './risks/risks.component';
import { HeaderComponent } from './header/header.component';
import { RiskDetailsComponent } from './risks/risk-details/risk-details.component';
import { BadgesComponent } from './badges/badges.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    RisksComponent,
    HeaderComponent,
    RiskDetailsComponent,
    BadgesComponent,
    AuthenticationComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
