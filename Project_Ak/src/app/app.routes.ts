import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ConvertPdfToPowerpointComponent} from './Components/convert-pdf-to-powerpoint/convert-pdf-to-powerpoint.component'
import { ConvertPptToPdfComponent } from './Components/convert-ppt-to-pdf/convert-ppt-to-pdf.component';
import { ConvertWORDToPDFComponent } from './Components/convert-word-to-pdf/convert-word-to-pdf.component';
import { PdfToJpgComponent } from './Components/convert-pdf-to-jpg/convert-pdf-to-jpg.component';
import { ConvertExcelToPdfComponent } from './Components/convert-excel-to-pdf/convert-excel-to-pdf.component';
import { ConvertPdfToWordComponent } from './Components/convert-pdf-to-word/convert-pdf-to-word.component';
import { ConvertJpgToPdfComponent } from './Components/convert-jpg-to-pdf/convert-jpg-to-pdf.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'pdftopowerpoint', component: ConvertPdfToPowerpointComponent,  canActivate: [authGuard]},
  { path: 'ppttopdf', component: ConvertPptToPdfComponent, canActivate: [authGuard]},
  { path: 'wordtopdf', component: ConvertWORDToPDFComponent, canActivate: [authGuard]},
  { path: 'pdftojpg', component: PdfToJpgComponent, canActivate: [authGuard]},
  { path: 'exceltopdf', component: ConvertExcelToPdfComponent, canActivate: [authGuard] },
  { path: 'pdftoword', component: ConvertPdfToWordComponent, canActivate: [authGuard] },
  { path: 'jpgtopdf', component: ConvertJpgToPdfComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
