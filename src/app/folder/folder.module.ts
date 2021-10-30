import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, AddComponent, DetailComponent],
  imports: [CommonModule],
  exports: [ListComponent, AddComponent],
})
export class FolderModule {}
