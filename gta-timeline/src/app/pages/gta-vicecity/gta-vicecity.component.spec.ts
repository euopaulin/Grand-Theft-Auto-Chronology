import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtaVicecityComponent } from './gta-vicecity.component';

describe('GtaVicecityComponent', () => {
  let component: GtaVicecityComponent;
  let fixture: ComponentFixture<GtaVicecityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GtaVicecityComponent]
    });
    fixture = TestBed.createComponent(GtaVicecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
