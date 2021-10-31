import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail/detail.component';

const components = [ListComponent, DetailComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class ListFolderModule {}
