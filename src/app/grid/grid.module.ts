import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid.component';
// 
import {MatGridListModule} from '@angular/material/grid-list'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
// Components.
import {HeaderComponent} from './../header/header.component';
import {NoteEditorComponent} from './../note-editor/note-editor.component';
import { NotelistComponent } from './../notelist/notelist.component';



@NgModule({
  declarations: [
    GridComponent,
    HeaderComponent,
    NoteEditorComponent, 
    NotelistComponent, 
  ],
  imports: [
    CommonModule, MatToolbarModule, MatGridListModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [GridComponent]
})
export class GridModule { }
