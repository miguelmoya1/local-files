import { Component, Input } from '@angular/core';
import { Directory, File } from '../../folder/folder.service';

@Component({
  selector: 'app-detail',
  template: `
    <ng-container *ngIf="tree.type === 'file' && open">
      <div class="flex items-center gap-4 justify-between mb-4">
        <div class="w-9/12">
          <p class="text-gray-800 text-base truncate">
            {{ tree.name }}
          </p>
          <p *ngIf="tree.path" class="text-gray-600 text-xs italic truncate">
            {{ tree.path }}
          </p>
        </div>
        <p
          class="text-xs text-gray-400 italic w-3/12 flex items-center justify-end"
        >
          {{ tree.formatSize }}
        </p>
      </div>
    </ng-container>

    <ng-container *ngIf="tree.type === 'directory' && open">
      <div class="flex flex-col mb-4">
        <div
          *ngIf="showWithFolder"
          class="flex items-center gap-2 cursor-pointer mb-4"
          (click)="onClick($event)"
        >
          <div class="text-lg text-blue-900">
            {{ tree.name }}
          </div>
          <span
            class="transform transition-transform text-sm text-center font-bold"
            [ngClass]="{
              '-rotate-90': openChildren,
              'rotate-90': !openChildren
            }"
            >></span
          >
        </div>
        <div [ngClass]="{ 'ml-8': showWithFolder }">
          <app-detail
            [open]="openChildren"
            *ngFor="let child of tree.children"
            [tree]="child"
          ></app-detail>
        </div>
      </div>
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
