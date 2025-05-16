import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convert-jpg-to-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convert-jpg-to-pdf.component.html',
  styleUrls: ['./convert-jpg-to-pdf.component.css']
})
export class ConvertJpgToPdfComponent {
  selectedFile: File | null = null;
  loading = false;
  errorMessage = '';
  convertedFileUrl: string | null = null;
  convertedFileName = '';

  constructor(private userService: UserService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.errorMessage = '';
      this.convertedFileUrl = null;
    }
  }

  convertJpgToPdf(): void {
    this.loading = true;
    this.errorMessage = '';
    this.convertedFileUrl = null;

    if (!this.selectedFile) {
      this.errorMessage = 'Please select a JPG file.';
      return;
    }

    this.userService.convertJpgToPdf(this.selectedFile).subscribe({
      next: (blob) => {
        this.convertedFileName = 'converted.pdf';
        this.convertedFileUrl = URL.createObjectURL(blob);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Conversion failed. Please try again.';
        this.loading = false;
      }
    });
  }
}
