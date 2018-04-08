import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      parrafo 1 ( toma el estilo del app-css component )
    </p>
  `,
  styles: [`
    p {
      color:red ;
      font-size:20px;
    }
  `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
