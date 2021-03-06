import { EventEmitter, Injectable } from '@angular/core';

export type Directory = {
  type: 'directory';
  name: string;
  children: Tree;
};

export type File = {
  type: 'file';
  path?: string;
  name: string;
  formatSize: string;
  realSize: number;
  kind: string;
};

export type Tree = (Directory | File)[];

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  #folder?: FileSystemDirectoryHandle;
  folderUpdate$ = new EventEmitter<void>();

  getFolder() {
    return this.#folder;
  }

  public checkAPISupport() {
    return window.File && window.FileReader && window.FileList && window.Blob;
  }

  public async openFolder() {
    const folder = await showDirectoryPicker();
    if (folder) {
      this.#folder = folder;
      this.folderUpdate$.emit();
    }
  }

  public async getTree() {
    if (!this.#folder) {
      return;
    }

    const dirHandle = this.#folder.values();

    const tree = await this.getInternalTree(dirHandle);
    return tree;
  }

  public async getList() {
    if (!this.#folder) {
      return;
    }

    const dirHandle = this.#folder.values();

    const list = await this.getInternalList(dirHandle, `${this.#folder.name}/`);

    return list.sort((f, s) => s.realSize - f.realSize);
  }

  private async getInternalList(
    dir: AsyncIterableIterator<FileSystemHandle>,
    path: string
  ) {
    const list: File[] = [];

    for await (const entry of dir) {
      if (entry.kind === 'file') {
        const file = await entry.getFile();

        list.push({
          type: entry.kind,
          name: entry.name,
          realSize: file.size,
          formatSize: this.formatSizeFile(file.size),
          kind: 'file',
          path,
        });
      } else {
        const file = [
          ...(await this.getInternalList(
            entry.values(),
            `${path}${entry.name}/`
          )),
        ];
        list.push(...file);
      }
    }
    return list;
  }

  private async getInternalTree(dir: AsyncIterableIterator<FileSystemHandle>) {
    const tree: Tree = [];

    for await (const entry of dir) {
      if (entry.kind === 'file') {
        const file = await entry.getFile();

        tree.push({
          type: entry.kind,
          name: entry.name,
          realSize: file.size,
          formatSize: this.formatSizeFile(file.size),
          kind: 'file',
        });
      } else {
        tree.push({
          type: entry.kind,
          name: entry.name,
          children: await this.getInternalTree(entry.values()),
        });
      }
    }

    return tree;
  }

  private formatSizeFile(size: number) {
    if (size < 1024) {
      return `${size} B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024).toFixed(2)} MB`;
    } else {
      return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
    }
  }
}
