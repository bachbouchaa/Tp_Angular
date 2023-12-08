import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { DetailComponent } from './cvTech/detail-cv/detail-cv.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { DetailledComponent } from './cvTech/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
