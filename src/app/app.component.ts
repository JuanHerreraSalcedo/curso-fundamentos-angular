import { Component } from '@angular/core';
// import {LoggerService } from './logger.service';
import { GreetingsService} from './greetings.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myName:string = 'Juan';
  public titleStyles:{};
  // public counter = 0;

  constructor(private greetings:GreetingsService){
  // constructor(private logger:LoggerService){

  }
  onSayHello(message){
    // this.logger.log(message);
    // console.log(message);

    // this.counter++;
    this.updateTitleStyles();
    this.greetings.handleGreetings(message);
  }

  updateNameClasses(name:string){
    return {
      'error' : name.length <=3,
      'warning' : name.length >3 && name.length <=6,
      'success' : name.length >6,
      'bold': name.length >8
    }
  }

  updateTitleStyles(){
    this.titleStyles = {
      'margin-top': '40px',
      // 'color': this.counter < 3 ? 'green' : 'goldenrod'
      'color': this.greetings.counter < 3 ? 'green' : 'goldenrod'
    }
  }
}
