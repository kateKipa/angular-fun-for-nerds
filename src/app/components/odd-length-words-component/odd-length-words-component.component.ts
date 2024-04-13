import { Component, Input } from '@angular/core';
import { InputComponentComponent } from '../input-component/input-component.component';


@Component({
  selector: 'app-odd-length-words-component',
  standalone: true,
  imports: [InputComponentComponent],
  templateUrl: './odd-length-words-component.component.html',
  styleUrl: './odd-length-words-component.component.css'
})

export class OddLengthWordsComponentComponent {

  @Input() oddOrEven! : boolean
  @Input() userInput : string
  @Input() array : string[]
}
