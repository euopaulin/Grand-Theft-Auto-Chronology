import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta2Component } from './gta2.component';

describe('Gta2Component', () => {
  let component: Gta2Component;
  let fixture: ComponentFixture<Gta2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gta2Component]
    });
    fixture = TestBed.createComponent(Gta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
