import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import service et place dans provider.
import { ApiBackEndService } from './api-back-end.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [ApiBackEndService],
  bootstrap: [AppComponent]
})
export class AppModule {}
