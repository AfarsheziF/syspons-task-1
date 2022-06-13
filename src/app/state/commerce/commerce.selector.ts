import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CommercesState } from './commerce.reducer';

export const selectCommerces = (state: AppState) => state.commerces;
export const selectAllCommerces = createSelector(
    selectCommerces,
    (state: CommercesState) => state
);