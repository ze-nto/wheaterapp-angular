
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksPage } from './container/bookmarks/bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from 'src/app/pages/bookmarks/state/bookmarks.reducer';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer)
  ],
  declarations: [
    BookmarksPage,
  ],
})
export class BookmarksModule { }