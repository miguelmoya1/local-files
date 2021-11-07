import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <ng-container *ngIf="loading">
      <div class="animate-pulse flex">
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-600 rounded w-2/4"></div>
          <div class="h-4 bg-gray-600 rounded w-2/4"></div>
          <div class="flex justify-between gap-4">
            <div class="h-4 bg-gray-600 rounded w-3/4"></div>
            <div class="h-4 bg-gray-600 rounded w-1/4"></div>
          </div>
          <div class="flex justify-between gap-4">
            <div class="h-4 bg-gray-600 rounded w-3/4"></div>
            <div class="h-4 bg-gray-600 rounded w-1/4"></div>
          </div>
          <div class="h-4 bg-gray-600 rounded w-2/4"></div>
          <div class="flex justify-between gap-4">
            <div class="h-4 bg-gray-600 rounded w-3/4"></div>
            <div class="h-4 bg-gray-600 rounded w-1/4"></div>
          </div>
          <div class="h-4 bg-gray-600 rounded w-2/4"></div>
          <div class="flex justify-between gap-4">
            <div class="h-4 bg-gray-600 rounded w-3/4"></div>
            <div class="h-4 bg-gray-600 rounded w-1/4"></div>
          </div>
          <div class="flex justify-between gap-4">
            <div class="h-4 bg-gray-600 rounded w-3/4"></div>
            <div class="h-4 bg-gray-600 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class LoadingComponent {
  @Input() loading = false;
}
