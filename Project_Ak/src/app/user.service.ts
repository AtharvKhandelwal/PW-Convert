import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7007/api';      // Change this to your .NET Core Web API URL

  private usernameSubject = new BehaviorSubject<string | null>(localStorage.getItem('username'));
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Signup method
  signup(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/User/signup`, user);
  }

  // Login method
  login(user: any): Observable<any> {
    return new Observable(observer => {
      this.http.post<any>(`${this.apiUrl}/User/login`, user).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.user.userName);
          this.usernameSubject.next(response.user.userName); // Broadcast username
          observer.next(response);
          observer.complete();
        },
        error: (err) => {
          observer.error(err);
        }
      });
    });
  }
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.usernameSubject.next(null);
  }
  
  convertWordToPdf(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/Features/ConvertWordToPdf`, formData, {
      // headers: headers,
      responseType: 'blob'
    });
  }

  convertPdfToPpt(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/Features/ConvertPdfToPpt`, formData, {
      // headers,
      responseType: 'blob'
    });
  }
  

  convertPptToPdf(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/Features/ConvertPptToPdf`, formData, {
      // headers,
      responseType: 'blob'
    });
  }

  convertPdfToJpg(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/Features/ConvertPdfToJpg`, formData, {
      responseType: 'blob'
    });
  }
  
  convertExcelToPdf(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}` // // Add your token here
    // });
    return this.http.post(`${this.apiUrl}/Features/ConvertExcelToPdf`, formData, {
      responseType: 'blob' 
    });
  }

  convertPdfToWord(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/Features/ConvertPdfToWord`, formData, {
      responseType: 'blob'
    });
  }

  convertJpgToPdf(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/Features/ConvertJpgToPdf`, formData, {
      responseType: 'blob'
    });
  }

}

