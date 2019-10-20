import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfileModalComponent } from './change-profile-modal.component';

describe('ChangeProfileModalComponent', () => {
  let component: ChangeProfileModalComponent;
  let fixture: ComponentFixture<ChangeProfileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProfileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
