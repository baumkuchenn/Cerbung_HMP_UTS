import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private router: Router,
    private cerbungservice: CerbungserviceService
  ) { }

  ngOnInit() {
  }

  options = ['Action', 'Horror', 'Sci-fi', 'Drama', 'Thriller']

  title: string = '';
  desc: string = '';
  image: string = '';
  genre: string = '';

  createCerbung() {
    const newCerbung = {
      title: this.title,
      shortDesc: this.desc,
      url: this.image,
      genre: this.genre
    }
    this.cerbungservice.createCerbung(newCerbung);
    this.router.navigate(['/create2'])
  }
}
