import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pref',
  templateUrl: './pref.page.html',
  styleUrls: ['./pref.page.scss'],
})
export class PrefPage implements OnInit {
  id = "";
  username = "";
  foto = "";
  oldPass = "";
  newPass = "";
  confNewPass = "";

  constructor(
    private cerbungservice: CerbungserviceService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    // Retrieve data from local storage
    this.id = localStorage.getItem('app_id') || '';
    this.username = localStorage.getItem('app_username') || '';
    this.foto = localStorage.getItem('app_url_foto') || '';
  }

  async BtnLogOut_OnClick() {
    await this.presentConfAlert("Log out dari Cerbung?");
  }

  async BtnChangePass_OnClick() {
    if (this.oldPass !== "" && this.newPass !== "" && this.confNewPass !== "") {
      if (this.newPass === this.confNewPass) {
        // Call the service to change the password
        this.cerbungservice.changePass(this.id, this.newPass, this.oldPass).subscribe(
          async (response: any) => {
            if (response.result === 'OK') {
              await this.presentOkAlert("Password updated successfully");
            } else {
              alert(response.message);
            }
          }
        );
      } else {
        await this.presentOkAlert("Password baru dan Konfirmasi password tidak sama.");
      }
    } else {
      await this.presentOkAlert("Ada kolom yang belum terisi.");
    }
  }

  async presentConfAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Konfirmasi',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Log out',
          handler: () => {
            // Clear data from local storage
            this.id = "";
            this.username = "";
            this.foto = "";
            localStorage.removeItem('app_id');
            localStorage.removeItem('app_username');
            localStorage.removeItem('app_url_foto');
            this.router.navigate(['/login']);
          },
        },
      ]
    });

    await alert.present();
  }

  async presentOkAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Pemberitahuan',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
