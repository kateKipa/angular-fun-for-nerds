import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponentComponent } from "./components/input-component/input-component.component";
import { EvenLengthWordsComponentComponent } from "./components/even-length-words-component/even-length-words-component.component";
import { OddLengthWordsComponentComponent } from "./components/odd-length-words-component/odd-length-words-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InputComponentComponent, InputComponentComponent, EvenLengthWordsComponentComponent, OddLengthWordsComponentComponent]
})
export class AppComponent {
  title = 'angular-fun-for-nerds';
}
