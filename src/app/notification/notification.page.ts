import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  
  idUser: string = localStorage.getItem('app_id') || '';
  notifications: any[] = [];

  constructor(
    public cerbungservice: CerbungserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cerbungservice.getNotif(this.idUser).subscribe(
      (notif: any) => {
        this.notifications = notif;
        console.log(this.notifications);
      }
    );
  }

}
