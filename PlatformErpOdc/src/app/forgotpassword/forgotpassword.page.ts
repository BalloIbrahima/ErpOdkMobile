import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../services/activite/activite.service';
import { ForgetPasswordService } from '../services/ForgetPass/forget-password.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private activiteservice:ActiviteService,private emailService:ForgetPasswordService, private route:ActivatedRoute) { }
  email:any
  password:any
  password2:any
  code:any

  error:Boolean;
  erreur:String;

  ngOnInit() {

    this.code=this.route.snapshot.params['code']
    console.log(this.code);
  }


  ChangePass(){
    this.error=false
    if(this.password==this.password2){
      if(this.password.length <= 8){
        this.error=true;
        this.erreur="mot de passe trop court"
      
      }
      else{

      this.emailService.ChangePass(this.email, this.password,this.code).subscribe(retour=>{
        if(retour.message=='ok'){

        }else{
          this.error=true;
          this.erreur=retour.data;
        }
      
      })
    }
  }else{
      this.error=true;
      this.erreur="Les deux mots de passe  sont différent"
    }

  }

}
