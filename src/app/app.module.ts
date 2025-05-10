import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MDevHubModule } from 'mdevhub';

@NgModule({
  declarations: [AppComponent, TableExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MDevHubModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
