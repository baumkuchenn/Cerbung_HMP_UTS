import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  id: string = "";
  cerita: any[] = [];

  cerbungs: any | null = null; // Menambahkan variabel cerbung dan menginisialisasinya sebagai null
  storys: any | null = null;
  isRequestingContribute: boolean = false;
  newParagraph: string = '';
  buttonVisible = true;
  cerbungLikes: { [title: string]: boolean } = {};

  constructor(
    public cerbungservice: CerbungserviceService,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.cerbungservice.getDetailCerita(this.id).subscribe(
      (result) => {
        this.cerbungservice.getData(this.id).subscribe(
          (data: any) => {
            if (data && data.result === 'OK') {
              const combinedData = {
                cerita: result,
                additionalData: data.data // Assuming your response structure
              };
              console.log(combinedData);
              this.cerita.push(combinedData);
            } else {
              console.log('No data found');
            }
          },
        );
      });
  }

  tambahLike(pParagraf: string) {
    const story = this.cerbungservice.storys.find(story => story.paragraf === pParagraf);
    if (story) {
      story.like = 1 - story.like;
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
    this.buttonVisible = false;
  }

  async submitContribution() {
    if (this.newParagraph.length > 0) {
      // Anda dapat menambahkan logika untuk menyimpan paragraf baru ke dalam cerbung di sini
      // Misalnya, dengan menambahkannya ke array storys atau mengirimkannya ke server.
      // Setelah itu, atur kembali isRequestingContribute menjadi false.
      // ...
      this.isRequestingContribute = false;
      this.buttonVisible = true;
      this.newParagraph = ''; // Mengosongkan input setelah mengirimkan kontribusi
    }
    else {
      await this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Paragraf Kosong',
      message: 'Paragraf tidak boleh kosong',
      buttons: ['OK']
    });

    await alert.present();
  }
}
