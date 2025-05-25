import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta6Component } from './gta6.component';

describe('Gta6Component', () => {
  let component: Gta6Component;
  let fixture: ComponentFixture<Gta6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gta6Component]
    });
    fixture = TestBed.createComponent(Gta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
