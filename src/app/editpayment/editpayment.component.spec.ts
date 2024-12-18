import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaymentComponent } from './editpayment.component';

describe('EditpaymentComponent', () => {
  let component: EditpaymentComponent;
  let fixture: ComponentFixture<EditpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditpaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
