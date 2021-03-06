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
  editorFormGroup!: FormGroup

  constructor(private formbuilder: FormBuilder, private noteService: NoteService) {
    this.editorFormGroup = this.formbuilder.group({
      title: ['', Validators.required],
      date: ['']
    })
  }

  ngOnInit(): void {
  }

  add_new_note(){
    let note = new NoteModel(this.editorFormGroup.get('title')?.value)
    if(this.noteService.addNote(note)){
      console.log('Note added successfully')
    }else{
      console.log('Internal Error while adding a note')
    }
  }

  edit_note(){
    console.log('Update Button - clicked')
  }

}
