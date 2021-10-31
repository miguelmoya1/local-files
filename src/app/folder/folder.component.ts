import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  template: `
    <app-add-folder></app-add-folder>
    <app-draw-tree-folder></app-draw-tree-folder>
    <app-list-folders></app-list-folders>
  `,
})
export class FolderComponent {}
