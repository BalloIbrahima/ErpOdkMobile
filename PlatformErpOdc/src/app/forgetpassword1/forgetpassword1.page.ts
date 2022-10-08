import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ForgetPasswordService } from '../services/ForgetPass/forget-password.service';

@Component({
  selector: 'app-forgetpassword1',
  templateUrl: './forgetpassword1.page.html',
  styleUrls: ['./forgetpassword1.page.scss'],
})
export class Forgetpassword1Page implements OnInit {

  email:any;
  error:Boolean;
  erreur:String;
  constructor(private emailService:ForgetPasswordService) { }

  ngOnInit() {
  }

  sendMail(){
    this.error=false;
    this.emailService.SendEmail(this.email).subscribe(retour=>{
      console.log(retour)
      if(retour.message=='ok'){

      }else if(retour.message=="errorUser"){
        this.error=true;
        this.erreur=retour.data
      }else{
        this.error=true;
        this.erreur="Erreur du serveur !"
      }
    })
  }

}
