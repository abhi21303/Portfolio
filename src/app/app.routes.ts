import { Routes } from '@angular/router';
import { NavbarComponent } from './Component/navbar/navbar.component';

export 
const routes: Routes = [
  { path: '', component: NavbarComponent }, // Default Route
  { path: 'home', component: NavbarComponent },
  { path: 'about', component: NavbarComponent },
  { path: 'projects', component: NavbarComponent },
  { path: 'contact', component: NavbarComponent },
  { path: '**', redirectTo: '' } // Redirect unknown paths to home
];