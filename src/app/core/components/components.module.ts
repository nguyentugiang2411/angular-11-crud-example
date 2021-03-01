import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, ModalComponent } from './index';

@NgModule({
  declarations: [
    AlertComponent,
    ModalComponent
  ],
  imports: [],
  exports: [
    AlertComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
