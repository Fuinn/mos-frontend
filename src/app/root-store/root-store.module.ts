import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RootStoreEffects } from './root-store.effects';
import { rootStoreReducer } from './root-store.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ root: rootStoreReducer }),
	  EffectsModule.forRoot([RootStoreEffects])
  ]
})
export class RootStoreModule { }
