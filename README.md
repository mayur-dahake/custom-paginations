
# Custom Angular Pagination Component

A lightweight, reusable, and customizable pagination component built with Angular and Angular Material. This mini-project demonstrates how to paginate tabular data with a modern UI and clean component structure.

## ✨ Features

- Works seamlessly with Angular Material tables  
- Customizable labels for navigation buttons (e.g., "Prev", "Next")  
- Responsive pagination layout with ellipsis for long page ranges  
- Configurable page size options  
- Emits page change and page size change events  
- Standalone component — easily copy and paste into any Angular app  
- Styled pagination layout  
- Fixed-height table with vertical scroll for smooth UX  

## 📦 Installation

Install the package using npm:

```bash
npm install mdevhub
```

---

## 🔧 Usage

Import the desired modules in your Angular module or component:

```ts
// Example in a standalone component
import { MDevHubPaginatorComponent } from 'mdevhub';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MDevHubPaginatorComponent],
  ...
})
```

Or if you're using an NgModule:

```ts
import { NgModule } from '@angular/core';
import { MDevHubPaginatorComponent } from 'mdevhub';

@NgModule({
  declarations: [...],
  imports: [
    MDevHubPaginatorComponent
  ]
})
export class YourModule {}
```

---

## 🧪 Example - Using the Custom Paginator

```html
<mdevhub-paginator
  [totalRecords]="totalRecords"
  [itemsPerPage]="pageSize"
  [currentPage]="currentPage"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)">
</mdevhub-paginator>
```

```ts
// In your component.ts
totalRecords = 100;
pageSize = 10;
currentPage = 1;

onPageChange(newPage: number) {
  this.currentPage = newPage;
}

onPageSizeChange(newSize: number) {
  this.pageSize = newSize;
  this.currentPage = 1;
}

currentPage = 1;
pageSize = 10;
totalRecords = ELEMENT_DATA.length;

onPageChange(page: number): void {
  this.currentPage = page;
  this.updateTableData();
}

onPageSizeChange(size: number): void {
  this.pageSize = size;
  this.currentPage = 1;
  this.updateTableData();
}
```

5. Optional: Add fixed-height styling to your table container:

```scss
.table-container {
  max-height: 40vh;
  overflow-y: auto;
  margin-bottom: 16px;
}
```

## 🧠 Suggestions for Improvement

If you want to make this more reusable or turn it into a full library:

- Add i18n support for labels  
- Optional first/last navigation buttons  
- Theme agnostic with CSS variables  
- Turn it into an Angular library for `npm` installation  
- Add Jasmine/Karma unit tests  
- Include ARIA attributes for better accessibility  

## 🧪 Dependencies

- Angular  
- Angular Material  

To install Angular Material if not already:

```bash
ng add @angular/material
```

## Source Code
-  🔗 [GitHub](https://github.com/mayur-dahake/custom-paginations)  

## Demo
-   💻 [Demo](https://custom-paginations.vercel.app/)

## 📸 Screenshots

<!-- Add screenshots or a GIF demo of the component here if desired -->

![alt text](src/asset/image.png)

## 🤝 Contribution

This is a mini reusable pagination solution built for copy-paste usage in Angular apps. Fork or clone the repo to adapt it as needed!
