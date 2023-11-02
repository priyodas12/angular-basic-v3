import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMemuComponent } from './main-memu.component';

describe('MainMemuComponent', () => {
  let component: MainMemuComponent;
  let fixture: ComponentFixture<MainMemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMemuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
