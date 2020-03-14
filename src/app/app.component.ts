import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing Challenge';
  randomText = lorem.sentence();
  enteredText = '';
  success = false;

  onInput(value: string) {
    this.enteredText = value;
  }

  getClass(entered: string, random: string){
    console.log(entered + " | " + random);
    
    if (entered == undefined)
      {
        return "grey";
      }
    return (entered === random) ? "green" : "red";
  
  }
}
