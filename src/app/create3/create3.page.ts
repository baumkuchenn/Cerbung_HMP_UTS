import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {

  retrievedData: any = {};

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.retrievedData = params['data'];
    });
  }

  ngOnInit() {
  }

}
