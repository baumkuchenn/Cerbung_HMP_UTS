import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = "";
  password = "";

  constructor(
    private cerbungService: CerbungserviceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async BtnLogin_OnClick() {
    const login = this.cerbungService.CekLogin(this.username, this.password);
    if (login) {
      this.username = "";
      this.password = "";
    }
    else{
      await this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sign in Gagal',
      message: 'Username atau password salah.',
      buttons: ['OK']
    });

    await alert.present();
  }
}