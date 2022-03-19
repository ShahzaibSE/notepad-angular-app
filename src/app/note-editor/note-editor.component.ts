import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  editorFormGroup?: FormGroup

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editorFormGroup = this.formbuilder.group({
      title: ['', Validators.required],
      date: ['']
    })
  }

}
