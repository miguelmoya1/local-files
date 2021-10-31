import { Component, OnDestroy, OnInit } from '@angular/core';
import { FolderService, Tree } from '../folder.service';

@Component({
  selector: 'app-draw-tree-folder',
  template: `
    <pre>
  <!-- {{ tree | json }} -->
</pre>
  `,
})
export class DrawTreeComponent implements OnInit, OnDestroy {
  tree?: Tree;
  subscriptions: any[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  constructor(protected readonly folderService: FolderService) {}

  async ngOnInit() {
    this.subscriptions.push(
      this.folderService.folderUpdate$.subscribe(() => {
        this.setTree();
      })
    );

    this.setTree();
  }

  async setTree() {
    this.tree = await this.folderService.getTree();
  }
}
