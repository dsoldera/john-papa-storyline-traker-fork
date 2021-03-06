import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import './core/rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import { CharacterService } from './models';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 600 }),
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
