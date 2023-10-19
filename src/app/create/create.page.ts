import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  options = ['Action','Horror','Sci-fi','Drama','Thriller']

  title: string = '';
  desc: string = '';
  image: string = '';
  genre: string = '';

  goToPage2() {
    this.router.navigate(['/create2'], {
      queryParams: {
        data: {
          title:this.title,
          desc:this.desc,
          image:this.image,
          genre:this.genre
        }
      },
    });
}
}
