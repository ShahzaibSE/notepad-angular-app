import { Injectable } from '@angular/core';
// Model.
import {NoteModel} from "./note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Array<NoteModel> = []

  constructor() { }

  addNote(note: NoteModel){
    try{
      if(note.title) {
        this.notes.push(note)
      }
      return this.notes
    }
    catch(e){
      throw e
    }
  }

  getNotes(){
    try {
      return this.notes
    }
    catch(e){
      throw e
    }
  }

  updateNote(note: NoteModel, index: any){
    try {
      if(note.title) {
        // this.notes[index].title
      }
    }
    catch(e){
      throw e
    }
  }

  removeNote(note: NoteModel){
    try{
      if(note.title){
        this.notes =  this.notes.filter((item)=>item.title == note.title)
      }
      return this.notes
    }
    catch(e){
      throw e
    }
  }
}
