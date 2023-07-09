import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  mobileNav: boolean = false;
  mobile: boolean = false;

  shoMobileNav() {
    this.mobileNav = !this.mobileNav;
    this.mobile = !this.mobile;

    if (this.mobileNav === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
