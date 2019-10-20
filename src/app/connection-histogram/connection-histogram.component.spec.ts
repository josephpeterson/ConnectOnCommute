import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionHistogramComponent } from './connection-histogram.component';

describe('ConnectionHistogramComponent', () => {
  let component: ConnectionHistogramComponent;
  let fixture: ComponentFixture<ConnectionHistogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionHistogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
