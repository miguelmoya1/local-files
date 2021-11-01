import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ComponentsModule } from '../../components/components.module';

const components = [ListComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, ComponentsModule],
  exports: components,
})
export class ListFolderModule {}
