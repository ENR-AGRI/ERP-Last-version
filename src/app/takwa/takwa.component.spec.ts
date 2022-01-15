import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakwaComponent } from './takwa.component';

describe('TakwaComponent', () => {
  let component: TakwaComponent;
  let fixture: ComponentFixture<TakwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
