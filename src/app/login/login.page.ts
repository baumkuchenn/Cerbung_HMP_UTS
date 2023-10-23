import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any; // inisialisasi awal
  password: any;

  constructor(
    private cerbungService: CerbungserviceService,
    private alertController: AlertController,

  ) { }

  ngOnInit() {
  }

  async BtnLogin_OnClick() {
    if (this.username && this.password) {
      const login = this.cerbungService.CekLogin(this.username, this.password);
      if (login) {
        this.username = ""; // pengosongan ini berguna untuk mengosongkan nilai variabel
        this.password = ""; //menjadi string kosong sehingga pengguna dapat memasukkan nama pengguna yang berbeda jika mereka ingin masuk kembali.
      } else {
        await this.presentAlert('Username atau password salah.');
      }
    } else {
      await this.presentAlert('Masukan Username dan Password.');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Sign in Gagal',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

