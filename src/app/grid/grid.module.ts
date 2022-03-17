import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
// 
import {MatGridListModule} from '@angular/material/grid-list'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// Components.
import {HeaderComponent} from './../header/header.component';



@NgModule({
  declarations: [
    GridComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule, MatToolbarModule, MatIconModule, MatButtonModule,
  ],
  exports: [GridComponent]
})
export class GridModule { }
