import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-respond',
  templateUrl: './respond.page.html',
  styleUrls: ['./respond.page.scss'],
})
export class RespondPage implements OnInit {

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






