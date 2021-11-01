import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FolderService, Tree } from '../folder.service';

@Component({
  selector: 'app-add-folder',
  template: `
    <app-card>
      <div class="text-center" *ngIf="!folder; else Withfolder">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <h2 class="mt-2 text-lg font-medium text-gray-900">Add Folders</h2>
        <p class="mt-1 text-sm text-gray-500">
          You haven’t added any folder yet, click on the button below to add a
          new folder to watch.
        </p>
      </div>

      <ng-template #Withfolder>
        <div class="flex items-center justify-center">
          <div class="mr-2 text-2xl">Current folder:</div>
          <div *ngIf="folder" class="text-gray-700 text-xl">
            {{ folder.name }}
          </div>
        </div>
      </ng-template>

      <div class="flex items-center justify-center">
        <button
          (click)="openFolder()"
          type="submit"
          class="m-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ !folder ? 'Add folder' : 'Chang folder' }}
        </button>
      </div>
    </app-card>
  `,
})
export class AddComponent implements OnInit, OnDestroy {
  folder?: FileSystemDirectoryHandle;
  subscriptions: Subscription[] = [];
  constructor(protected readonly folderService: FolderService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.folderService.folderUpdate$.subscribe(() => {
        this.folder = this.folderService.getFolder();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  openFolder() {
    this.folderService.openFolder();
  }
}
