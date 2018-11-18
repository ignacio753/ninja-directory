import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {name: "Yoshi", belt: "black"},
    {name: "Ryu", belt: "red"},
    {name: "Crystal", belt: "pink"},
  ]
  constructor(private logger: LoggingService) { 
  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
