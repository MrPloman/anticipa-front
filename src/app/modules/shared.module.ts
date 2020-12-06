import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from '../components/list/list.component';
import { CardComponent } from '../components/card/card.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    PaginationComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule],
  exports: [ListComponent, CardComponent, PaginationComponent, LoaderComponent],
  providers: [],
})
export class SharedModule {}
