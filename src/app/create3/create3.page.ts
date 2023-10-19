import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {

  cerbungs: any = [];
  storys: any = [];

  constructor(private cerbungservice:CerbungserviceService) {  }

  ngOnInit() {
    this.cerbungs = this.cerbungservice.cerbungs.pop();
    this.storys = this.cerbungservice.storys.pop();
  }


}
