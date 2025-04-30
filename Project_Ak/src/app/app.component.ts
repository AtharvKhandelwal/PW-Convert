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

// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterModule],
//   template: `
//     <nav>
//       <ul>
//         <li><a routerLink="/signup">Signup</a></li>
//         <li><a routerLink="/login">Login</a></li>
//         <li><a routerLink="/home">Home</a></li>
//       </ul>
//     </nav>
//     <router-outlet></router-outlet>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'signup-app';
// }
