import { Component } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  title: string = "";
  author: string = "";

  books :BookModel[] = [] 

  addBook() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    let book: BookModel = {
      id: this.books.length + 1, 
      title: this.title, 
      author: this.author
    };
    this.books.push(book);
    this.title = "";
    this.author = "";
  }

  removeBook(id: number) {
    this.books = this.books.filter(book => book.id !==
    id);  

  }

}
