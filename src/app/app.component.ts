import { Component, ViewChild, ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-element-generator';
  items = [];
  id = 0;
  JSON: any[];

  @ViewChild('item') itemView: ElementRef<any>;

  addElementToList() {
    this.id++;
    this.items.push(`Element ${this.id}`);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  generateJson() {
    this.JSON = this.items;
  }
}
