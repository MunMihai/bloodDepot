import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeLine';

  showNavbar = true;
  showFooter = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set variables accordingly
        const currentRoute = this.route.root.firstChild?.snapshot.routeConfig?.path;
        if (currentRoute === 'Authentificate') {
          this.showNavbar = false;
          this.showFooter = false;
        } else {
          this.showNavbar = true;
          this.showFooter = true;
        }
      }
    });
  }
}
