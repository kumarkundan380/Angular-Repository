import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h2> {{name}} </h2>
  <h2> {{name | lowercase}}</h2>
  <h2> {{name | uppercase}} </h2>
  <h2> {{message | titlecase}} </h2>
  <h2> {{name | slice:6:18}} </h2>
  <h2> {{person | json}} </h2>

  <h2> {{5.678 | number:'1.2-3'}} </h2>
  <h2> {{5.678 | number:'3.4-5'}} </h2>
  <h2> {{5.678 | number:'3.1-2'}} </h2>

  <h2> {{0.25 | percent}} </h2>

  <h2> {{0.25 | currency}} </h2>
  <h2> {{0.35 | currency:'IND'}} </h2>  

  <h2> {{date}} </h2>
  <h2> {{date | date:'short'}} </h2>
  <h2> {{date | date:'shortDate'}} </h2>
  <h2> {{date | date:'shortTime'}} </h2>
  <h2> {{"Hello "+ name}} </h2>
  <button (click)="fireEvent()">Send Event</button>
   `, 
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName=false;
  public name="KUNDAN KUMAR"
  public color="black";
  public message="Welcom to mindfire solutions";
  public date=new Date();
  public colors=["red","blue","green","yellow"];
  public person={
    "firstName":"Kundan",
    "lastName":"Kumar"
  }
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey Kundan')
  }

}
