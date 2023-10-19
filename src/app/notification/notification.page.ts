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
    notifications: any[] | undefined;
    constructor(
      public cerbungservice: CerbungserviceService,
      private route: ActivatedRoute
    ) {}

    ngOnInit() {
      this.notifications = this.cerbungservice.notifications;
    }

  }
