import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymipPage } from './mymip.page';

describe('MymipPage', () => {
  let component: MymipPage;
  let fixture: ComponentFixture<MymipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
