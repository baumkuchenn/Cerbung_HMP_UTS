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

  idUser: string = localStorage.getItem('app_id') || '';
  idCerita: string = "";
  cerita: any[] = [];
  paragraf: any[] = [];
  followed: string = "";

  newParagraph: string = '';

  constructor(
    public cerbungservice: CerbungserviceService,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idCerita = params['id'];
    });
    this.cerbungservice.getDetailCerita(this.idCerita).subscribe(
      (result) => {
        this.cerbungservice.getData(this.idCerita).subscribe(
          (data: any) => {
            if (data && data.result === 'OK') {
              const combinedData = {
                cerita: result,
                additionalData: data.data // Assuming your response structure
              };
              this.cerita.push(combinedData);
            } else {
              console.log('No data found');
            }
          },
        );
      });
    this.cerbungservice.getParagraf(this.idCerita).subscribe(
      (paragraf: any[]) => {
        paragraf.forEach((paragrafItem) => {
          this.cerbungservice.cekLikeParagraf(paragrafItem.id, this.idUser).subscribe(
            (data: any) => {
              if (data && data.result === 'OK') {
                const combinedData = {
                  paragraf: paragrafItem,
                  additionalData: data.data // Assuming your response structure
                };
                this.paragraf.push(combinedData);
              } else {
                console.log('No data found');
              }
            },
          );
        });
      }
    );
    this.cerbungservice.cekFollowCerita(this.idCerita, this.idUser).subscribe(
      (data: any) => {
        this.followed = data.data;
      }
    );
  }

  tambahLike(pIdParagraf: string, pStatus: string, pIdPenerima: string, pTitle: string) {
    this.cerbungservice.tambahLikeParagraf(pIdParagraf, this.idUser, pStatus).subscribe(
      (response: any) => {
        alert(response.message);
        //Kirim notif
        if (response.message == "Paragraf dilike") {
          this.cerbungservice.addNotif(pIdPenerima, this.idUser, "liked your paragraph in " + pTitle).subscribe(
            (response: any) => {

            }
          )
        }
        window.location.reload();
      }
    );
  }

  followCerita(pIdPenerima: string, pTitle: string) {
    this.cerbungservice.tambahFollowCerita(this.idCerita, this.idUser, this.followed).subscribe(
      (response: any) => {
        alert(response.message)
        //Kirim notif
        if (response.message == "Cerita difollow") {
          this.cerbungservice.addNotif(pIdPenerima, this.idUser, "started following your " + pTitle + " story").subscribe(
            (response: any) => {

            }
          )
        }

        window.location.reload();
      }
    )
  }

  tambahParagraf(pTitle: string, pAuthor: string) {
    if (this.newParagraph.length > 0) {
      this.cerbungservice.tambahParagrafBaru(this.newParagraph, this.idUser, this.idCerita).subscribe(
        (response: any) => {
          alert(response.message);
          //Kirim notif
          this.cerbungservice.addNotif(pAuthor, this.idUser, "added new paragraph into " + pTitle).subscribe(
            (response: any) => {
              
            }
          );

          this.cerbungservice.getFollowerCerita(this.idCerita).subscribe(
            (pengikut: any[]) => {
              // Use Promise.all to wait for all notifications to be sent
              const notificationPromises = pengikut.map((pengikutItem) => {
                return this.cerbungservice.addNotif(pengikutItem.users_id, this.idUser, "added new paragraph into " + pTitle).toPromise();
              });

              // Wait for all notifications to be sent and then refresh the page
              Promise.all(notificationPromises).then(() => {
                window.location.reload();
              });
            }
          );
        }
      )
    }
    else {
      this.presentAlert();
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

  requestContribute() {

  }
}
