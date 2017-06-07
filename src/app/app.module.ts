import { ApiService } from './api.service';
import { StateService } from './state.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SettingsAreaComponent } from './settings-area/settings-area.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { TopInputComponent } from './top-input/top-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SettingsAreaComponent,
    MainBodyComponent,
    TopInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
