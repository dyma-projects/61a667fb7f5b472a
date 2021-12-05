import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour',
  template: `
    <p>
      Bonjour Dynas.fr!
    </p>
  `,
  styles: [
  ]
})
export class BonjourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
