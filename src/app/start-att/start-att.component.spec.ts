import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAttComponent } from './start-att.component';

describe('StartAttComponent', () => {
  let component: StartAttComponent;
  let fixture: ComponentFixture<StartAttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
