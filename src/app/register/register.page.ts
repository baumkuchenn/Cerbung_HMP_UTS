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

        this.cerbungService.regis(this.username,this.password,this.url).subscribe(
          (response:any)=>{
            console.log('Response:', response);
            if (response.result === 'Success') {
              alert('Registration successful');
              
              this.router.navigate(['/login']);
            } else {
                alert(response.message);
            }      
          }
        )
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
