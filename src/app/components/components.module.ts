import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { LoadingComponent } from './loading/loading.component';

const components = [CardComponent, DetailComponent, LoadingComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class ComponentsModule {}
