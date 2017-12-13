import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';

import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {DataSyncService} from './services/data-sync.service';
@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [UserService,DataSyncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
