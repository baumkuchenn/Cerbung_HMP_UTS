import { Component } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  cerita: any[] = [];
  search = "";

  constructor(
    public cerbungservice: CerbungserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cerbungservice.getCerita().subscribe(
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

  // searchCerita() {
  //   if (this.search.trim() !== '') {
  //     this.cerbungservice.getCeritaSearch(this.search).subscribe(
  //       (cerita: any[]) => {
  //         cerita.forEach((ceritaItem) => {
  //           this.cerbungservice.getData(ceritaItem.id).subscribe(
  //             (data: any) => {
  //               if (data && data.result === 'OK') {
  //                 const combinedData = {
  //                   cerita: ceritaItem,
  //                   additionalData: data.data // Assuming your response structure
  //                 };
  //                 this.cerita.push(combinedData);
  //               } else {
  //                 console.log('No data found');
  //               }
  //             },
  //           );
  //         });
  //       },
  //     );
  //   }
  // }
}
