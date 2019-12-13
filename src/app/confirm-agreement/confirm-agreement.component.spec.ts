import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAgreementComponent } from './confirm-agreement.component';

describe('ConfirmAgreementComponent', () => {
  let component: ConfirmAgreementComponent;
  let fixture: ComponentFixture<ConfirmAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
