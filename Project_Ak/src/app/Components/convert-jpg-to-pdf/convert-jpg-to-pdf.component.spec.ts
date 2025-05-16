import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertJpgToPdfComponent } from './convert-jpg-to-pdf.component';

describe('ConvertJpgToPdfComponent', () => {
  let component: ConvertJpgToPdfComponent;
  let fixture: ComponentFixture<ConvertJpgToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertJpgToPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertJpgToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
