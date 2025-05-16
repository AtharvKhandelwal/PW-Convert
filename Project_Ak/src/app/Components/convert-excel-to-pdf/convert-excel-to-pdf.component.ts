import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convert-excel-to-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convert-excel-to-pdf.component.html',
  styleUrls: ['./convert-excel-to-pdf.component.css']
})
export class ConvertExcelToPdfComponent {
  selectedFile: File | null = null;
  loading = false;
  errorMessage = '';
  convertedFileUrl: string | null = null;
  convertedFileName = '';

  constructor(private userService: UserService) {}

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.errorMessage = '';
      this.convertedFileUrl = null;
    }
  }

  // Convert Excel to PDF
  convertExcelToPdf(): void {
    this.loading = true;
    this.errorMessage = '';
    this.convertedFileUrl = null;

    if (!this.selectedFile) {
      this.errorMessage = 'Please select an Excel file.';
      this.loading = false;
      return;
    }

    this.userService.convertExcelToPdf(this.selectedFile).subscribe({
      next: (blob) => {
        this.convertedFileName = `converted.pdf`;
        this.convertedFileUrl = URL.createObjectURL(blob);
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Conversion failed. Please try again.';
        this.loading = false;
      }
    });
  }
}
