import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZucchettiComponent } from './zucchetti.component';

describe('ZucchettiComponent', () => {
  let component: ZucchettiComponent;
  let fixture: ComponentFixture<ZucchettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZucchettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZucchettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
