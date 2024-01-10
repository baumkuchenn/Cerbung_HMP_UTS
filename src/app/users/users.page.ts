import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: any[] = [];
  usersMostLiked: any[] = [];
  idUser:string = '';
  tampilan = "liked";

  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    // this.loggedInUser = this.cerbungservice.getLoggedInUser();
    // this.pengguna = this.cerbungservice.getUserDanStory();
    // this.penggunaAll = this.cerbungservice.getUserDanStorySemua();
    this.idUser = localStorage.getItem('app_id') || '';
    this.cerbungservice.getAllUser().subscribe(
      (data) => {
        this.users = data;
      }
    )
    this.cerbungservice.getMostLikedUser().subscribe(
      (data) => {
        this.usersMostLiked = data;
      }
    )
  }
}
