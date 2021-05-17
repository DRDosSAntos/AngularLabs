import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopetestComponent } from './scopetest.component';

describe('ScopetestComponent', () => {
  let component: ScopetestComponent;
  let fixture: ComponentFixture<ScopetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
