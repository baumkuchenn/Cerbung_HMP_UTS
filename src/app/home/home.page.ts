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
  loggedInUser: string | null = null;

  constructor(
    public cerbungservice: CerbungserviceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const receivedData = params.get('data');
    });
    this.loggedInUser = this.cerbungservice.getLoggedInUser();
    this.cerbungs = this.cerbungservice.getHighestLikeCerbung();
    this.cerbungs.forEach((cerbung) => {
      const totalLikes = this.cerbungservice.calculateTotalLikes(cerbung.title);
      this.cerbungservice.setLikeCount(cerbung.title, totalLikes);
    });
  }
}
