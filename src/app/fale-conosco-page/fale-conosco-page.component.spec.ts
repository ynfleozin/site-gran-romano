import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleConoscoPageComponent } from './fale-conosco-page.component';

describe('FaleConoscoPageComponent', () => {
  let component: FaleConoscoPageComponent;
  let fixture: ComponentFixture<FaleConoscoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaleConoscoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaleConoscoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
