import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { DrawTreeComponent } from './draw-tree/draw-tree.component';
import { FolderComponent } from './folder.component';
import { ListFolderModule } from './list/list.module';

@NgModule({
  declarations: [AddComponent, DrawTreeComponent, FolderComponent],
  imports: [CommonModule, ListFolderModule],
  exports: [FolderComponent],
})
export class FolderModule {}
