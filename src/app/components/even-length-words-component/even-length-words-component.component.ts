import { Component, Input } from '@angular/core';
import { InputComponentComponent } from '../input-component/input-component.component';

@Component({
  selector: 'app-even-length-words-component',
  standalone: true,
  imports: [InputComponentComponent],
  templateUrl: './even-length-words-component.component.html',
  styleUrl: './even-length-words-component.component.css'
})
export class EvenLengthWordsComponentComponent {

  @Input() oddOrEven! : boolean
  @Input() userInput! : string
  @Input() array! : string[]
}
