import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-hacker]',
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.scss']
})
export class HackerComponent implements OnInit {

  @Input() hacker;

  constructor() { }

  ngOnInit() {
  }

}
