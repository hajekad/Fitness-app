import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterWalkComponent } from './after-walk.component';

describe('AfterWalkComponent', () => {
  let component: AfterWalkComponent;
  let fixture: ComponentFixture<AfterWalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterWalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterWalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
