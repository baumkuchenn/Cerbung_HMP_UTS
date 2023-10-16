import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  cerbungs: any[] = [];
  loggedInUser: string | null = null;

  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.loggedInUser = this.cerbungservice.getLoggedInUser();
    this.cerbungs = this.cerbungservice.getCerbungDanStory();
  }

}
