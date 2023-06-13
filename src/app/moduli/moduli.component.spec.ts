import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuliComponent } from './moduli.component';

describe('ModuliComponent', () => {
  let component: ModuliComponent;
  let fixture: ComponentFixture<ModuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
