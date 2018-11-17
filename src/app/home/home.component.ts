import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage";
  @Input() ninja;
  @Output() onYell = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireYellEvent(e) {
    this.onYell.emit(e);
  }

}
