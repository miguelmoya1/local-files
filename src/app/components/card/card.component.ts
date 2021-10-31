import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="container mx-auto rounded-xl shadow-lg p-4 my-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {}
