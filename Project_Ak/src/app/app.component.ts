import { Component, ChangeDetectorRef, OnInit} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from './user.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatAutocompleteModule,
            MatCardModule, 
            MatProgressSpinnerModule, 
            RouterOutlet, 
            RouterModule,
            MatToolbarModule, 
            MatButtonModule, 
            MatIconModule, 
            MatMenuModule,
            CommonModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Project';
  username: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService.username$.subscribe(name => {
      this.username = name;
      this.cdr.detectChanges(); // ensure view updates
    });
  }

  logoutFunction(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}