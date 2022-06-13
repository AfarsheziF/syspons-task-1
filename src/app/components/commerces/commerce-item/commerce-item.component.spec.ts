import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceItemComponent } from './commerce-item.component';

describe('CommerceItemComponent', () => {
  let component: CommerceItemComponent;
  let fixture: ComponentFixture<CommerceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommerceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
