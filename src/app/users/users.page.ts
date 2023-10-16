import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  pengguna: any[] = [];
  penggunaAll: any[] = [];
  loggedInUser: string | null = null;

  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.loggedInUser = this.cerbungservice.getLoggedInUser();
    this.pengguna = this.cerbungservice.getUserDanStory();
    this.penggunaAll = this.cerbungservice.getUserDanStorySemua();
  }

  tampilan = "liked";
}
