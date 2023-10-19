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

  userProfile: { username: string; foto: string } | null = null;
  oldPass = "";
  newPass = "";
  confNewPass = "";

  constructor(
    private cerbungservice: CerbungserviceService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.userProfile = this.cerbungservice.getUserProfile();
  }

  async BtnLogOut_OnClick() {
    await this.presentConfAlert("Log out dari Cerbung?");
  }

  async BtnChangePass_OnClick() {
    if (this.oldPass !== "" && this.newPass !== "" && this.confNewPass !== "") {
      if (this.newPass === this.confNewPass) {
        await this.presentOkAlert("Ganti password berhasil.");
      }
      else {
        await this.presentOkAlert("Password baru dan Konfirmasi password tidak sama.");
      }
    }
    else {
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
