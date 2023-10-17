import { Component } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  cerbungs: any[] = [];
  search = "";
  highestLikeCerbung: number | null = null;
  loggedInUser: string | null = null;

  constructor(
    private cerbungservice: CerbungserviceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const receivedData = params.get('data');
    });
    this.loggedInUser = this.cerbungservice.getLoggedInUser();
    this.highestLikeCerbung = this.cerbungservice.getHighestLikeCerbung();
    this.cerbungs = this.cerbungservice.cerbungs.filter(cerbung => cerbung.like == this.highestLikeCerbung);
  }
}
