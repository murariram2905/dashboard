import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private categories = [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [{ id: 101, name: 'Widget A', text: 'CSPM widget text' },
                { id: 102, name: 'Widget Aa', text: 'CSPM widget text1' }
      ]
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [{ id: 201, name: 'Widget B', text: 'CWPP widget text' },
                { id: 202, name: 'Widget Bb', text: 'CWPP widget text1' }
      ]
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [{ id: 301, name: 'Widget C', text: 'Registry scan widget' },
                { id: 302, name: 'Widget Cc', text: 'Registry scan widget1' }
      ]
    }
  ];

  private categoriesSubject = new BehaviorSubject<any[]>(this.categories);
  categories$ = this.categoriesSubject.asObservable();

  addWidget(categoryId: number, widget: any) {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      widget.id = new Date().getTime(); // unique id
      category.widgets.push(widget);
      this.categoriesSubject.next(this.categories);
    }
  }

  removeWidget(categoryId: number, widgetId: number) {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.widgets = category.widgets.filter(w => w.id !== widgetId);
      this.categoriesSubject.next(this.categories);
    }
  }
}
