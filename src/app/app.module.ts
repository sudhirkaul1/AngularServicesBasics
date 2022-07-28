import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { InactiveusersComponent } from './inactiveusers/inactiveusers.component';
import { counterService } from './Services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveusersComponent,
    InactiveusersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [counterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
