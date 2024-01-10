import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  options: any[] = [];
  cerita: any[] = [];

  idCeritaNew:Number = 0;
  idUser: string = '';
  title: string = '';
  desc: string = '';
  image: string = '';
  genre: string = '';

  constructor(private router: Router,
    private cerbungservice: CerbungserviceService
  ) { }

  ngOnInit() {
    this.idUser = localStorage.getItem('app_id') || '';
    this.cerbungservice.getGenre().subscribe(
      (data) => {
        this.options = data;
      }
    )
    this.cerbungservice.getCerita().subscribe(
      (isi) => {
        this.cerita = isi;
        this.idCeritaNew = this.cerita.length + 1
      }
    )
  }

  getCurrentDate(): string {
    const today = new Date();
  
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

  arrCerita() {
    const selectedGenre = this.options.find(option => option.nama === this.genre);

    const newCerita = {
      idCeritaNew: this.idCeritaNew,
      idUser: this.idUser,
      title: this.title,
      shortDesc: this.desc,
      url: this.image,
      idGenre: selectedGenre.id,
      genre: this.genre,
      tglRilis: this.getCurrentDate()
    }
    this.cerbungservice.arrCerita(newCerita);
    this.router.navigate(['/create2'])
  }

  
}
