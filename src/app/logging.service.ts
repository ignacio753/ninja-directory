import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  log() {
    console.log('This is a logging service');
  }

  constructor() { }

}
