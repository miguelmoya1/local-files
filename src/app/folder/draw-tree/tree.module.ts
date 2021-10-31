import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from '../../components/components.module';
import { TreeComponent } from './tree.component';

const components = [TreeComponent, DetailComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, ComponentsModule],
  exports: components,
})
export class TreeFolderModule {}
