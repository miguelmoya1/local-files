import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { FolderComponent } from './folder.component';
import { ListFolderModule } from './list/list.module';
import { ComponentsModule } from '../components/components.module';
import { TreeFolderModule } from './draw-tree/tree.module';

@NgModule({
  declarations: [AddComponent, FolderComponent],
  imports: [CommonModule, ListFolderModule, ComponentsModule, TreeFolderModule],
  exports: [FolderComponent],
})
export class FolderModule {}
