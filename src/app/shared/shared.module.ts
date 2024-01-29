import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    Sidebar
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Sidebar
  ]
})
export class SharedModule { }
