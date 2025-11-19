import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToList } from './back-to-list';

describe('BackToList', () => {
  let component: BackToList;
  let fixture: ComponentFixture<BackToList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
