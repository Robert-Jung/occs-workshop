import { Component, OnInit } from '@angular/core';
import { Hacker } from '../core/hacker.model';
import { HackerService } from '../core/services/hacker.service';

@Component({
  selector: 'app-hacker-list',
  templateUrl: './hacker-list.component.html',
  styleUrls: ['./hacker-list.component.scss']
})
export class HackerListComponent implements OnInit {

  hackers: Hacker[];

  constructor(private api: HackerService) { }

  ngOnInit() {
    this.api.getHackers('')
      .subscribe(
        data => this.hackers = data,
        err => console.log(err)
      );
  }

  filterData(searchTerm) {
    this.api.getHackers(searchTerm)
        .subscribe(data => this.hackers = data);
  }
}
