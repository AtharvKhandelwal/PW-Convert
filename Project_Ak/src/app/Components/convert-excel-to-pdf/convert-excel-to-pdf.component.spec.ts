import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertExcelToPdfComponent } from './convert-excel-to-pdf.component';

describe('ConvertExcelToPdfComponent', () => {
  let component: ConvertExcelToPdfComponent;
  let fixture: ComponentFixture<ConvertExcelToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertExcelToPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertExcelToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
