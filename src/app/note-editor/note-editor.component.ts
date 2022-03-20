import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//
import {NoteService} from "./../note.service";
import { NoteModel } from '../note.model';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  editorFormGroup?: FormGroup

  constructor(private formbuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {
    this.editorFormGroup = this.formbuilder.group({
      title: ['', Validators.required],
      date: ['']
    })
  }

  add_new_note(){
    console.log('Add button - clicked')
    // const note = new NoteModel(this.editorFormGroup?.get('title')?.value)
  }

  edit_note(){
    console.log('Update Button - clicked')
  }

}
