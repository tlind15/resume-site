import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BasicInfoComponent } from './basic-info/basic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BasicInfoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
