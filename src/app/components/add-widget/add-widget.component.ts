import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-widget',
  standalone: false,
  templateUrl: './add-widget.component.html',
  styleUrl: './add-widget.component.scss'
})
export class AddWidgetComponent {
  @Input() categoryId!: number;
  @Output() widgetAdded = new EventEmitter<{ categoryId: number; name: string; text: string }>();
  @Output() closed = new EventEmitter<void>();

  widgetName = '';
  widgetText = '';

  addWidget() {
    if (this.widgetName.trim() && this.widgetText.trim()) {
      this.widgetAdded.emit({
        categoryId: this.categoryId,
        name: this.widgetName,
        text: this.widgetText
      });
    }
  }
}
