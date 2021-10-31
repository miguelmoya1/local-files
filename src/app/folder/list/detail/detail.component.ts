import { Component, Input } from '@angular/core';
import { File } from '../../folder.service';

@Component({
  selector: 'app-detail',
  template: `
    <div class="flex">
      {{ file.name }}
    </div>
  `,
})
export class DetailComponent {
  @Input() file!: File;
}
