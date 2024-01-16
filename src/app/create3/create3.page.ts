import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {

  cerbungs: any = [];
  paragraph: string = ''
  access: string = ''
  isCheckboxChecked: boolean = false;

  constructor(private router: Router, private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    // this.cerbungs = this.cerbungservice.cerbungs.pop();
    // this.storys = this.cerbungservice.storys.pop();

    this.cerbungs = this.cerbungservice.cerita.pop()
    this.access = this.cerbungservice.access
    this.paragraph = this.cerbungservice.paragraph


  }
  //Untuk mengosongkan isi variable dan mengganti data yang baru saat button previous di klik
  // clearArrayStory() {
  //   this.paragraph = ''
  //   this.access = ''

  //   this.cerbungservice.access = ''
  //   this.cerbungservice.paragraph = ''
  // }

  submitCerita() {
    this.cerbungservice.newCerita(
      this.cerbungs.title,
      this.cerbungs.url,
      this.cerbungs.shortDesc,
      this.access,
      this.cerbungs.idUser,
      this.cerbungs.idGenre
    ).subscribe(
      (response: any) => {
        alert(response.message);
        //Kirim notif
      }
    )

  }

  submitParagraph() {

    this.cerbungservice.tambahParagrafBaru(
      this.paragraph,
      this.cerbungs.idUser,
      this.cerbungs.idCeritaNew
    ).subscribe(
      (response: any) => {
        alert(response.message);
        //Kirim notif
      }
    )
  }

  handleButtonClick() {
    if (this.isCheckboxChecked) {
      this.submitCerita();
      this.submitParagraph();

      this.router.navigate(['/home'])

      // Delayed refresh after 1 second (adjust the time as needed)
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

}
