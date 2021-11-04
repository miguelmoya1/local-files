import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { TreeComponent } from './tree.component';

const components = [TreeComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, ComponentsModule],
  exports: components,
})
export class TreeFolderModule {}
