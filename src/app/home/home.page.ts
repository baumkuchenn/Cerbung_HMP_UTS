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
    // this.cerbungservice.getCerita().subscribe(
    //   (cerita: any[]) => {
    //     cerita.forEach((ceritaItem) => {
    //       this.cerbungservice.getData(ceritaItem.id).subscribe(
    //         (data: any) => {
    //           if (data && data.result === 'OK') {
    //             const combinedData = {
    //               cerita: ceritaItem,
    //               additionalData: data.data // Assuming your response structure
    //             };
    //             this.cerita.push(combinedData);
    //           } else {
    //             console.log('No data found');
    //           }
    //         },
    //       );
    //     });
    //   }
    // );

    this.fetchCerita();
  }

  fetchCerita() {
    this.cerbungservice.getCerita(this.search).subscribe(
      (cerita: any[]) => {
        this.cerita = cerita.map((ceritaItem) => {
          return {
            cerita: ceritaItem,
            additionalData: null, // Set to null initially, will be fetched later
          };
        });
  
        // Fetch additional data for each cerita
        this.cerita.forEach((combinedData) => {
          this.cerbungservice.getData(combinedData.cerita.id).subscribe(
            (data: any) => {
              if (data && data.result === 'OK') {
                combinedData.additionalData = data.data;
              } else {
                console.log('No data found');
              }
            },
          );
        });
      },
    );
  }

  onSearchChange() {
    this.fetchCerita();
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
