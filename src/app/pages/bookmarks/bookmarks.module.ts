
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

<<<<<<< HEAD
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BookmarksEffects } from './state/bookmarks.effects';
=======
import { BookmarksPage } from './container/bookmarks/bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from 'src/app/pages/bookmarks/state/bookmarks.reducer';
import { RouterModule } from '@angular/router';
>>>>>>> app-state-02

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarksEffects]),
    ComponentsModule,
=======
    StoreModule.forFeature('bookmarks', bookmarkReducer)
>>>>>>> app-state-02
  ],
  declarations: [
    BookmarksPage,
  ],
})
<<<<<<< HEAD
export class BookmarksModule {
}
=======
export class BookmarksModule { }
>>>>>>> app-state-02
