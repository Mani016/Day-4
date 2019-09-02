import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsRepeatDirective } from './as-repeat.directive';
import { ClickCatcherDirective } from './click-catcher.directive';

@NgModule({
  declarations: [
    AppComponent,
    AsRepeatDirective,
    ClickCatcherDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
