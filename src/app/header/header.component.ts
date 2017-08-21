import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header id="particles">
      <h2>{{ title }}</h2>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  title = 'The Grid';

  constructor() { }

  ngOnInit() {
  }

}
