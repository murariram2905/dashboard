import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit {
 categories: any[] = [];
  showAddWidget = false;
  selectedCategoryId: number | null = null;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.categories$.subscribe(data => {
      this.categories = data;
    });
  }

  openAddWidget(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.showAddWidget = true;
  }

  removeWidget(categoryId: number, widgetId: number) {
    this.dashboardService.removeWidget(categoryId, widgetId);
  }

  onWidgetAdded(widget: { categoryId: number; name: string; text: string }) {
    this.dashboardService.addWidget(widget.categoryId, {
      id: 0,
      name: widget.name,
      text: widget.text
    });
    this.showAddWidget = false;
  }
}


