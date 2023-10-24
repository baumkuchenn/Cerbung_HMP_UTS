import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CerbungserviceService } from '../cerbungservice.service';

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
    private cerbungService: CerbungserviceService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async BtnRegister_OnClick() {
    if (this.username !== "" && this.password !== "" && this.confPass !== "" && this.url !== "") {
      if (this.password === this.confPass) {
        const cekUser=this.cerbungService.cekUsername(this.username);
        if(!cekUser){

        const newUser = {
          id: this.cerbungService.users.length + 1, // Berikan ID unik
          username: this.username,
          password: this.password,
          tglDibuat: new Date(),
          foto: this.url,
        };
        

        this.cerbungService.users.push(newUser);


        await this.presentAlert("Sign Up berhasil.");


        this.username = "";
        this.password = "";
        this.url = "";
        this.confPass = "";

        this.router.navigate(['/login']);
        }
        else{
          await this.presentAlert("Username sudah terpakai.");
        }
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
      buttons: ['OK']
    });

    await alert.present();
  }
}
