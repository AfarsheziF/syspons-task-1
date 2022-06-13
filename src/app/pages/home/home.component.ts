import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

import { AppState } from 'src/app/state/app.state';
import { LOAD_COMMERCE } from 'src/app/state/commerce/commerce.actions';
import { Commerce } from 'src/app/state/commerce/commerce.module';
import { CommercesState } from 'src/app/state/commerce/commerce.reducer';
import { selectAllCommerces } from 'src/app/state/commerce/commerce.selector';

let loadAmount = 20;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private commercesState$: Observable<CommercesState> = this.store.select(selectAllCommerces);

  public commerces$: Commerce[] = [];
  public animationIndex: number[] = [];
  public status$: string = "";
  public amount: number = 0;

  constructor(private store: Store<AppState>, private uiService: UiService) {
  }

  ngOnInit(): void {
    this.commercesState$.forEach(data => {
      this.commerces$ = data.commerces;
      this.amount = this.commerces$.length;
      this.status$ = data.status;
      this.animationIndex = data.animationIndex;
      this.uiService.toggleAddTask({ amount: this.amount, status: this.status$ });
    });
    this.store.dispatch(LOAD_COMMERCE({ amount: loadAmount }));
  }

  onScroll($event: { target: HTMLInputElement }): void {
    if (this.status$ !== 'loading' &&
      ($event.target?.clientHeight + $event.target.scrollTop) >= $event.target.scrollHeight) {
      this.store.dispatch(LOAD_COMMERCE({ amount: loadAmount }));
    }
  }

}
