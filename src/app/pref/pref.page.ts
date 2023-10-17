import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-pref',
  templateUrl: './pref.page.html',
  styleUrls: ['./pref.page.scss'],
})
export class PrefPage implements OnInit {

  userProfile: { username: string; foto: string } | null = null;

  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.userProfile = this.cerbungservice.getUserProfile();
  }
}
