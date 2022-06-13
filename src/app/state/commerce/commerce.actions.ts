import { createAction, props } from '@ngrx/store';
import { Commerce } from './commerce.module';

export const ADD_COMMERCE = createAction(
    '[Commerce Page] Add Commerce',
    props<{ content: string }>()
);

export const REMOVE_COMMERCE = createAction(
    '[Commerce Page] Remove Commerce',
    props<{ id: string }>()
);

export const LOAD_COMMERCE = createAction(
    '[Commerce Page] Load Commerces',
    props<{ amount: number }>());

export const LOAD_COMMERCE_SUCCESS = createAction(
    '[Commerce API] Commerce Load Success',
    props<{ commerces: Commerce[] }>()
);

export const LOAD_COMMERCE_FAILURE = createAction(
    '[Commerce API] Commerce Load Failure',
    props<{ error: string }>()
);