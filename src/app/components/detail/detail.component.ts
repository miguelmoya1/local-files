import { Component, Input } from '@angular/core';
import { Directory, File } from '../../folder/folder.service';

@Component({
  selector: 'app-detail',
  template: `
    <ng-container *ngIf="tree.type === 'file' && open">
      <div class="flex items-center gap-4 justify-between">
        <div class="text-gray-800 text-base w-9/12 truncate">
          {{ tree.name }}
        </div>
        <p
          class="text-xs text-gray-400 italic w-3/12 flex items-center justify-end"
        >
          {{ tree.formatSize }}
        </p>
      </div>
    </ng-container>

    <ng-container *ngIf="showWithFolder">
      <ng-container *ngIf="tree.type === 'directory' && open">
        <div class="flex flex-col">
          <div
            class="text-blue-900 text-lg flex items-center gap-4 cursor-pointer"
            (click)="onClick($event)"
          >
            {{ tree.name }}
            <span
              class="transform transition-transform text-sm text-center"
              [ngClass]="{
                'rotate-90 -translate-x-1': openChildren
              }"
              >></span
            >
          </div>
          <div class="ml-8">
            <app-detail
              [open]="openChildren"
              *ngFor="let child of tree.children"
              [tree]="child"
            ></app-detail>
          </div>
        </div>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="!showWithFolder">
      <ng-container *ngIf="tree.type === 'directory' && open">
        <app-detail
          [open]="openChildren"
          *ngFor="let child of tree.children"
          [tree]="child"
        ></app-detail>
      </ng-container>
    </ng-container>
  `,
})
export class DetailComponent {
  @Input() tree!: Directory | File;
  @Input() open = false;
  @Input() showWithFolder = true;
  openChildren = false;

  onClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.openChildren = !this.openChildren;
  }
}
