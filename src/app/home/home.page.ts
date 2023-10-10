import { Component } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jenistampilan = "card";
  cerbungs: any[] = [];

  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.cerbungs = this.cerbungservice.cerbungs;
  }

}
