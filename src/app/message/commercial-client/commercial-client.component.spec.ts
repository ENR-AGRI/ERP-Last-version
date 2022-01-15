import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialClientComponent } from './commercial-client.component';

describe('CommercialClientComponent', () => {
  let component: CommercialClientComponent;
  let fixture: ComponentFixture<CommercialClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
