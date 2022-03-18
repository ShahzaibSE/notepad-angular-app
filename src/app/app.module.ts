import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotelistComponent } from './notelist/notelist.component';

@NgModule({
  declarations: [
    AppComponent,
    NotelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
