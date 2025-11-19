import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItems } from './no-items';

describe('NoItems', () => {
  let component: NoItems;
  let fixture: ComponentFixture<NoItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
