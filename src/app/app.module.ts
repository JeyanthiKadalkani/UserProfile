import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';

import { UserProfile } from './service/userprofile.service'
import { FilterPipe} from './service/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,FilterPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ UserProfile ],
  bootstrap: [AppComponent]
})
export class AppModule { }
