import { CommonModule } from '@angular/common';
import { Component, computed, Signal, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { AuthUser } from '../../types/AuthResponseDTO';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // Convert the BehaviorSubject to a signal so you can use it in templates
  user$: Observable<AuthUser | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.User$;
    console.log(this.user$.subscribe((user) => console.log(user?.username)));
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  isNavbarOpen = false;
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
