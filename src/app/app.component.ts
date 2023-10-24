import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showTabs = true;
  constructor(private router: Router) { }

  isLoginAndRegisterPage(): boolean {
    return this.router.url.includes('login') || this.router.url.includes('register');
  }

  isHome(): boolean{
    return this.router.url.includes('home')
  }
  
  isFollowing(): boolean{
    return this.router.url.includes('following')
  }

  isCreate(): boolean{
    return this.router.url.includes('create') || this.router.url.includes('create2') || this.router.url.includes('create3')
  }

  isUser(): boolean{
    return this.router.url.includes('users')
  }

  isPref(): boolean{
    return this.router.url.includes('pref')
  }
}
