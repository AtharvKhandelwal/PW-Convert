import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convert-word-to-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convert-word-to-pdf.component.html',
  styleUrls: ['./convert-word-to-pdf.component.css']
})
export class ConvertWORDToPDFComponent {
  selectedFile: File | null = null;
  loading = false;
  errorMessage: string | null = null;
  pdfFileUrl: string | null = null;
  pdfFileName: string | null = null;

  constructor(private userService: UserService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validTypes = [
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!validTypes.includes(file.type)) {
        this.errorMessage = 'Only Word documents (.doc, .docx) are allowed.';
        this.selectedFile = null;
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        this.errorMessage = 'File is too large. Max allowed size is 10MB.';
        this.selectedFile = null;
        return;
      }

      this.selectedFile = file;
      this.errorMessage = null;
    }
  }

  convertWordToPdf(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a Word file.';
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    this.userService.convertWordToPdf(this.selectedFile).subscribe({
      next: (response) => {
        if (this.pdfFileUrl) {
          window.URL.revokeObjectURL(this.pdfFileUrl); // Cleanup previous URL
        }

        const blob = response;
        this.pdfFileUrl = window.URL.createObjectURL(blob);
        this.pdfFileName = this.selectedFile!.name.replace(/\.(docx?|DOCX?)$/, '.pdf');
        this.loading = false;
      },
      error: (err) => {
        if (err.error instanceof Blob) {
          this.errorMessage = 'Error converting file. Please try again.';
        } else {
          this.errorMessage = 'Conversion failed. ' + (err.message || 'Unknown error');
        }
        this.loading = false;
      }
    });
  }
}
