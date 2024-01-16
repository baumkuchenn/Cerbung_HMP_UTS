import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.page.html',
  styleUrls: ['./create2.page.scss'],
})
export class Create2Page implements OnInit {

  access: string = '';
  newParagraph: string = '';

  constructor(private router: Router,
    private cerbungservice:CerbungserviceService  
  ){}

  ngOnInit() {
    
  }

  createStory(){
    // const latestCerbung = this.cerbungservice.cerbungs.pop();
    // if (latestCerbung){
    //   this.cerbungservice.createStory(latestCerbung.title, this.newParagraph);
    // }
    this.cerbungservice.access = this.access;
    this.cerbungservice.paragraph = this.newParagraph;
    this.router.navigate(['/create3']);
  }

  

}
