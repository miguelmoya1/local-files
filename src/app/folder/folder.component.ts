import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  template: `
    <main class="p-4">
      <app-add-folder></app-add-folder>
      <app-tree-folders></app-tree-folders>
      <app-list-folders></app-list-folders>
    </main>
  `,
})
export class FolderComponent {}
