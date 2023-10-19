import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.page.html',
  styleUrls: ['./create2.page.scss'],
})
export class Create2Page implements OnInit {

  access: string = '';
  newParagraph: string = '';

  retrievedData: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.retrievedData = params['data'];
    });
  }

  goToPage3() {
    this.router.navigate(['/create3'], {
      queryParams: {
        data: {
          retieve:this.retrievedData,
          access:this.access,
          paragraph:this.newParagraph,
        }
      },
    });
  }

  ngOnInit() {
  }

}
