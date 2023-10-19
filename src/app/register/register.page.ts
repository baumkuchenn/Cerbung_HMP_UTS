import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username = "";
  password = "";
  url = "";
  confPass = "";

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async BtnRegister_OnClick() {
    if (this.username !== "" && this.password !== "" && this.confPass !== "" && this.url !== "") {
      if (this.password === this.confPass) {
        await this.presentAlert("Sign Up berhasil.");
        this.username = "";
        this.password = "";
        this.url = "";
        this.confPass = "";
      }
      else {
        await this.presentAlert("Password dan Konfirmasi password tidak sama.");
      }
    }
    else {
      await this.presentAlert("Ada kolom yang belum terisi.");
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Pemberitahuan',
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
