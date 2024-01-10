import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  idUser: string = localStorage.getItem('app_id') || '';
  cerita: any[] = [];

  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.cerbungservice.getFollowedCerita(this.idUser).subscribe(
      (cerita: any[]) => {
        cerita.forEach((ceritaItem) => {
          this.cerbungservice.getData(ceritaItem.id).subscribe(
            (data: any) => {
              if (data && data.result === 'OK') {
                const combinedData = {
                  cerita: ceritaItem,
                  additionalData: data.data // Assuming your response structure
                };
                this.cerita.push(combinedData);
              } else {
                console.log('No data found');
              }
            },
          );
        });
      }
    );
  }

}
