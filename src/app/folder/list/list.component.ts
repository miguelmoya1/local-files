import { Component, OnInit, OnDestroy } from '@angular/core';
import { FolderService, Tree } from '../folder.service';

@Component({
  selector: 'app-list-folders',
  template: `
    <app-card *ngIf="list?.length || loading">
      <div class="text-2xl mb-4">Lista</div>
      <app-loading [loading]="loading"></app-loading>
      <ng-container *ngFor="let item of list">
        <div class="ml-4">
          <app-detail [open]="true" [tree]="item"></app-detail>
        </div>
      </ng-container>
    </app-card>
  `,
})
export class ListComponent implements OnInit, OnDestroy {
  list?: Tree;
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
        this.setList();
      })
    );
  }

  async setList() {
    this.loading = true;
    this.list = [];
    this.list = await this.folderService.getList();
    this.loading = false;
  }
}
