import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  template: `
    <app-add-folder></app-add-folder>
    <app-tree-folders></app-tree-folders>
    <app-list-folders></app-list-folders>
  `,
})
export class FolderComponent {}
