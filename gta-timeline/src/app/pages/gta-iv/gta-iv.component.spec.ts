import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtaIvComponent } from './gta-iv.component';

describe('GtaIvComponent', () => {
  let component: GtaIvComponent;
  let fixture: ComponentFixture<GtaIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GtaIvComponent]
    });
    fixture = TestBed.createComponent(GtaIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
