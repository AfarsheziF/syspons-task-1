import { createReducer, on } from '@ngrx/store';
import { ADD_COMMERCE, REMOVE_COMMERCE, LOAD_COMMERCE, LOAD_COMMERCE_SUCCESS, LOAD_COMMERCE_FAILURE } from './commerce.actions';
import { Commerce } from './commerce.module';

export interface CommercesState {
    commerces: Commerce[];
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
    animationIndex: number[]
}

export const initialState: CommercesState = {
    commerces: [],
    error: null,
    status: 'pending',
    animationIndex: []
};

export const commerceReducer = createReducer(
    // Supply the initial state
    initialState,

    on(LOAD_COMMERCE, (state) => ({
        ...state,
        status: 'loading'
    })),

    // Handle successfully loaded commerces. Add new commerces to old state
    on(LOAD_COMMERCE_SUCCESS, (state, { commerces }) => ({
        ...state,
        commerces: state.commerces.concat(commerces),
        error: null,
        status: 'success',
        animationIndex: makeAnimationArray(state.commerces.length + commerces.length, commerces.length)
    })),

    // Handle commerces load failure
    on(LOAD_COMMERCE_FAILURE, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
);

function makeAnimationArray(length: number, loadedAmount: number): number[] {
    // return Array.from(Array().keys())
    let a = [];
    for (let i = 0; i < length; i++) {
        a.push(i % loadedAmount + 1);
    }
    return a;
}