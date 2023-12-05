import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'CERTECH_Frontend';

  constructor(private router: Router, private loginService: LoginService) {}

  mostrarLogin() {
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
}
