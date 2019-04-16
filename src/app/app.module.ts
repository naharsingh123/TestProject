import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DragAndDropModule,DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
