export class NoteModel {
    // id?: String;
    title?: String;
    description?: String;
    createdAt?: Date;
    updatedAt?: Date;

    // constructor(id?:String, title?:String, description?:String, createdAt?:Date, updatedAt?:Date){
    constructor(title?:String, description?:String, createdAt?:Date, updatedAt?:Date){
        // this.id = id
        this.title = title
        this.description = description
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export interface Note{
    title?: String;
    description?: String;
    createdAt?: Date;
    updatedAt?: Date;
}