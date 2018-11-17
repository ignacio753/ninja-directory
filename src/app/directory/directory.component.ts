import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninja: string;

  constructor(route: ActivatedRoute) { 
    this.ninja = route.snapshot.params['ninja'];
  }

  ngOnInit() {
  }

}
