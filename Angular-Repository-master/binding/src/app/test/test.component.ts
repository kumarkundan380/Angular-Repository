import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name="";
  constructor() { }

  ngOnInit() {
  }
  
}
