import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta1Component } from './gta1.component';

describe('Gta1Component', () => {
  let component: Gta1Component;
  let fixture: ComponentFixture<Gta1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gta1Component]
    });
    fixture = TestBed.createComponent(Gta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
