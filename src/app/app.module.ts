// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// NGRX
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CommerceItemComponent } from './components/commerces/commerce-item/commerce-item.component';

// State
import { commerceReducer } from './state/commerce/commerce.reducer';
import { CommercesEffects } from './state/commerce/commerce.effects';

// Routing
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    AboutComponent,
    FooterComponent,
    HomeComponent,
    CommerceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Angular Material
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,

    HttpClientModule,
    StoreModule.forRoot({ commerces: commerceReducer }, {}),
    EffectsModule.forRoot([CommercesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
