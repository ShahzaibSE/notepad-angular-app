import { Component, OnInit } from '@angular/core';
// Model.
import {NoteModel} from "./../note.model"
// Service.
import {NoteService} from "./../note.service"

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {

  notes: Array<NoteModel> = []

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
  }

}
