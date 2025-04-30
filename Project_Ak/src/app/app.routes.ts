import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ConvertPdfToPowerpointComponent} from './Components/convert-pdf-to-powerpoint/convert-pdf-to-powerpoint.component'
import { ConvertPptToPdfComponent } from './Components/convert-ppt-to-pdf/convert-ppt-to-pdf.component';
import { ConvertWORDToPDFComponent } from './Components/convert-word-to-pdf/convert-word-to-pdf.component';
import { PdfToJpgComponent } from './Components/convert-pdf-to-jpg/convert-pdf-to-jpg.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'pdftopowerpoint', component: ConvertPdfToPowerpointComponent,  canActivate: [authGuard]},
  { path: 'ppttopdf', component: ConvertPptToPdfComponent, canActivate: [authGuard]},
  { path: 'wordtopdf', component: ConvertWORDToPDFComponent, canActivate: [authGuard]},
  { path: 'pdftojpg', component: PdfToJpgComponent, canActivate: [authGuard]},
];
