import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="max-w-full w-180 mx-auto rounded-xl shadow-lg p-4 m-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {}
