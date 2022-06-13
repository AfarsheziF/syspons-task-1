import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ADD_COMMERCE, REMOVE_COMMERCE, LOAD_COMMERCE, LOAD_COMMERCE_SUCCESS, LOAD_COMMERCE_FAILURE } from './commerce.actions';
import { CommerceService } from 'src/app/services/commerce.service';
import { selectAllCommerces } from './commerce.selector';
import { AppState } from '../app.state';

@Injectable()
export class CommercesEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private commerceService: CommerceService
    ) { }

    // Run this code when a getCommerces action is dispatched
    loadCommerces$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LOAD_COMMERCE),
            switchMap(({ amount }) =>
                // Call the getCommerces method, convert it to an observable
                from(this.commerceService.getCommerces(amount)).pipe(
                    // Take the returned value and return a new success action containing the todos
                    map((commerces) => LOAD_COMMERCE_SUCCESS({ commerces: commerces })),
                    // Or... if it errors return a new failure action containing the error
                    catchError((error) => of(LOAD_COMMERCE_FAILURE({ error })))
                )
            )
        )
    );

    // Run this code when the addTodo or removeTodo action is dispatched
    // saveTodos$ = createEffect(
    //     () =>
    //         this.actions$.pipe(
    //             ofType(addTodo, removeTodo),
    //             withLatestFrom(this.store.select(selectAllTodos)),
    //             switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
    //         ),
    //     // Most effects dispatch another action, but this one is just a "fire and forget" effect
    //     { dispatch: false }
    // );
}