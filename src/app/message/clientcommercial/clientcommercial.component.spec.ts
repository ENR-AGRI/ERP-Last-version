import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcommercialComponent } from './clientcommercial.component';

describe('ClientcommercialComponent', () => {
  let component: ClientcommercialComponent;
  let fixture: ComponentFixture<ClientcommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
