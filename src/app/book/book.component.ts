import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  title: string = "";
  author: string = "";

  addBook() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
  }

}
