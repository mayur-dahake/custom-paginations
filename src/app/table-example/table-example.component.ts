import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-example',
  standalone: false,
  templateUrl: './table-example.component.html',
  styleUrl: './table-example.component.scss',
})
export class TableExampleComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>();
  totalRecords = ELEMENT_DATA.length;
  pageSize = 5;
  currentPage = 1;

  ngOnInit() {
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.dataSource.data = ELEMENT_DATA.slice(start, end);
  }

  public onPageChange(page: number) {
    this.currentPage = page;
    this.paginate();
  }

  public onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1;
    this.paginate();
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = Array.from({ length: 50 }).map((_, i) => ({
  position: i + 1,
  name: `Element ${i + 1}`,
  weight: +(Math.random() * 100).toFixed(2),
  symbol: `E${i + 1}`,
}));
