import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatouBoxComponent } from './matou-box/matou-box.component';
import { MatouRoarService } from "./matou-roar.service"
import { MatouFetchService } from "./matou-fetch.service"


@NgModule({
  declarations: [
    AppComponent,
    MatouBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MatouRoarService, MatouFetchService, MatouBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
