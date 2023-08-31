import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
