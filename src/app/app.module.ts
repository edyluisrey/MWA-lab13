import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StundentComponent } from './stundent/stundent.component';

import { myRoutes } from "./app.routes";
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { MyCanActivateGuard } from "./profile/mycanactivate.guard";

import { DbService } from './db/db.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StundentComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    myRoutes // add it to imports
  ],
  providers: [MyCanActivateGuard, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
