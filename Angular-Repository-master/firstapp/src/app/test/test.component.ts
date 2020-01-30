import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
  Inline Templet
  Multiple Line
  </div>`,
  styles: [`
    div
    {
      color:green;
    }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
