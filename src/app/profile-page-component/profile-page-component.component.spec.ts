import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageComponentComponent } from './profile-page-component.component';

describe('ProfilePageComponentComponent', () => {
  let component: ProfilePageComponentComponent;
  let fixture: ComponentFixture<ProfilePageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
