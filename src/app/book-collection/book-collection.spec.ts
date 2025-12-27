import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCollection } from './book-collection';

describe('BookCollection', () => {
  let component: BookCollection;
  let fixture: ComponentFixture<BookCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
