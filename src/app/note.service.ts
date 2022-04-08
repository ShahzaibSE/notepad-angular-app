import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
// Model.
import {NoteModel, Note} from "./note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Array<NoteModel> = []

  constructor(private firestore: AngularFirestore) { }

  addNote(note: NoteModel){
    try{
      if(note.title) {
        // this.notes.push(note)
        // this.firestore.collection(this)
        this.firestore.collection('notepadStore').add(note)
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
        for(let i=0; i<=this.notes.length; i++){
          if(note.title == this.notes[i].title){
          }
        }
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
