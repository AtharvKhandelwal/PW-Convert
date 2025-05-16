import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertPdfToWordComponent } from './convert-pdf-to-word.component';

describe('ConvertPdfToWordComponent', () => {
  let component: ConvertPdfToWordComponent;
  let fixture: ComponentFixture<ConvertPdfToWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertPdfToWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertPdfToWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
