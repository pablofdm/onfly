import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { DemoNgZorroAntdModule } from './ng-zorro-antd-module';
import { HotelCardsComponent } from './components/hotelcards/hotelcards.component';
import { CardComponent } from './components/card/card.component';
registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AppComponent,
    HotelCardsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  exports: [NzPageHeaderModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: NZ_I18N, useValue: pt_PT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
