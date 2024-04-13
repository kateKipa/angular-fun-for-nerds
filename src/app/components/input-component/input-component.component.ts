import { Component, ElementRef, EventEmitter, Injectable, Output, ViewChild } from '@angular/core';
import { OddLengthWordsComponentComponent } from "../odd-length-words-component/odd-length-words-component.component";
import { EvenLengthWordsComponentComponent } from "../even-length-words-component/even-length-words-component.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-input-component',
    standalone: true,
    templateUrl: './input-component.component.html',
    styleUrl: './input-component.component.css',
    imports: [OddLengthWordsComponentComponent, EvenLengthWordsComponentComponent, FormsModule]
})
export class InputComponentComponent {

  userInput: string = ""
  oddOrEven : boolean = true
  dataEven : string[] = []
  dataOdd : string[] = []

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.userInput = value
    this.oddOrEven = (this.userInput.length % 2 !== 0)   //True for odds - false for evens
  }

  addWord() {
    if (this.userInput.length > 0) {
      if (this.userInput.length % 2 === 0) {
        this.dataEven.push(this.userInput)
      } else {
        this.dataOdd.push(this.userInput)
      }
      this.userInput = ""
    }
    // for (const element of this.dataEven) {
    //   console.log(element);
    // }
   
  }
}
