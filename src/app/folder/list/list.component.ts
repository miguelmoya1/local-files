import { Component, OnInit, OnDestroy } from '@angular/core';
import { FolderService, Tree } from '../folder.service';

@Component({
  selector: 'app-list-folders',
  template: `
    <ng-container *ngFor="let folder of tree">
      <ng-container *ngIf="folder.type"></ng-container>
    </ng-container>
  `,
})
export class ListComponent implements OnInit, OnDestroy {
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
