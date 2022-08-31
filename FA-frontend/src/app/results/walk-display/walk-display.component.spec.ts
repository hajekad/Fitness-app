import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkDisplayComponent } from './walk-display.component';

describe('WalkDisplayComponent', () => {
  let component: WalkDisplayComponent;
  let fixture: ComponentFixture<WalkDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
