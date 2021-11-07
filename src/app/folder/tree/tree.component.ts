import { Component, OnInit, OnDestroy } from '@angular/core';
import { FolderService, Tree } from '../folder.service';

@Component({
  selector: 'app-tree-folders',
  template: `
    <app-card *ngIf="tree?.length || loading">
      <div class="text-2xl mb-4">Árbol</div>
      <app-loading [loading]="loading"></app-loading>
      <ng-container *ngIf="tree">
        <ng-container *ngFor="let item of tree">
          <div class="ml-4">
            <app-detail
              [showWithFolder]="true"
              [open]="true"
              [tree]="item"
            ></app-detail>
          </div>
        </ng-container>
      </ng-container>
    </app-card>
  `,
})
export class TreeComponent implements OnInit, OnDestroy {
  tree?: Tree;
  subscriptions: any[] = [];
  open = false;
  loading = false;

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
  }

  async setTree() {
    this.loading = true;
    this.tree = [];
    this.tree = await this.folderService.getTree();
    this.loading = false;
  }
}
