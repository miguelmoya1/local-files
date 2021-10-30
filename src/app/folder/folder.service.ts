import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  checkAPISupport() {
    return window.File && window.FileReader && window.FileList && window.Blob;
  }

  async openFolder() {
    const folder = await showDirectoryPicker();
    console.log(folder);
  }
}
