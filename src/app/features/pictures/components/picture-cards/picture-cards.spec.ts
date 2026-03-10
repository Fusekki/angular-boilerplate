import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCards } from './picture-cards';

describe('PictureCards', () => {
  let component: PictureCards;
  let fixture: ComponentFixture<PictureCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
