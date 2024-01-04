import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id: any;// inisialisasi awal
  username: any; 
  password: any;
  url:any;


  constructor(
    private cerbungService: CerbungserviceService,
    private alertController: AlertController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async BtnLogin_OnClick() {
     //pemanggilan function login di ts 
     this.cerbungService.login(this.username,this.password).subscribe(
      (response:any)=>{
        if (response.result === 'success') {
          alert('success');
      
          // Setelah sukses, masukkan ID pengguna ke dalam localStorage
          this.id = response.data.id
          this.url = response.data.url_foto
          localStorage.setItem('app_id', this.id);
          localStorage.setItem('app_username', this.username);
          localStorage.setItem('app_url_foto', this.url);

          this.router.navigate(['/home']);
        } else {
            alert(response.message);
        }      
      }
    )
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

