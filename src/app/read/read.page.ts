import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  cerbungTitle: string | null = "";
  cerbungs: any | null = null; // Menambahkan variabel cerbung dan menginisialisasinya sebagai null
  storys: any | null = null;
  isRequestingContribute: boolean = false;
  newParagraph: string = '';

  constructor(
    private cerbungservice: CerbungserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cerbungTitle = params.get('title')!;
      const receivedData = params.get('data');
    });
    this.cerbungs = this.cerbungservice.cerbungs.filter(cerbung => cerbung.title == this.cerbungTitle) || null;
    this.storys = this.cerbungservice.storys.filter(story => story.cerbungTitle == this.cerbungTitle) || null;
  }

  tambahLike(title: string) {
    const cerbung = this.cerbungservice.cerbungs.find(cerbung => cerbung.title === title);
    if (cerbung) {
      cerbung.like += 1;
    }
  }
  tambahParagraf(title: string) {
    const story = this.cerbungservice.storys.find(story => story.cerbungTitle == title);
    if (story) {
      story.paragraf += 1;
    }
  }
  toggleRequestContribute() {
    this.isRequestingContribute = !this.isRequestingContribute;
  }
  submitContribution() {
    if (this.newParagraph.length > 0) {
      // Anda dapat menambahkan logika untuk menyimpan paragraf baru ke dalam cerbung di sini
      // Misalnya, dengan menambahkannya ke array storys atau mengirimkannya ke server.
      // Setelah itu, atur kembali isRequestingContribute menjadi false.
      // ...
      this.isRequestingContribute = false;
      this.newParagraph = ''; // Mengosongkan input setelah mengirimkan kontribusi
    }
  }
}
