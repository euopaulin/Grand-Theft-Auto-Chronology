import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtaSaComponent } from './gta-sa.component';

describe('GtaSaComponent', () => {
  let component: GtaSaComponent;
  let fixture: ComponentFixture<GtaSaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GtaSaComponent]
    });
    fixture = TestBed.createComponent(GtaSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
