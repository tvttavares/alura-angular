import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosListComponent } from './photos-list.component';

import { PhotoModule } from './../photo/photo.module';
import { CardModule } from './../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotosListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule
  ]
})
export class PhotosListModule { }
