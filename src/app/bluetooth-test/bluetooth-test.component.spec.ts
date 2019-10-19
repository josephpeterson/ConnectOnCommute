import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothTestComponent } from './bluetooth-test.component';

describe('BluetoothTestComponent', () => {
  let component: BluetoothTestComponent;
  let fixture: ComponentFixture<BluetoothTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoothTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluetoothTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
