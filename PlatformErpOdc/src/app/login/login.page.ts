import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
   //variable concernant le login
   login:String;
   password:String;
   /////
 
   Utilisateur:any
  constructor(private utilisateurService: UtilisateurService) {}

  logForm(){
    this.utilisateurService.login(this.login,this.password).subscribe(data=>{
      //on vas recupere le message de retour et voir si tout ses bien passe
      console.log(data)

      if(data.message=="ok"){
        this.Utilisateur=data.data;
        console.log(this.Utilisateur)
      }else if(data.message=="error"){
        console.log(data.data);
      }
    })
  }
  // private todo : FormGroup;

  // constructor(private formBuilder:FormBuilder) {
  //   this.todo = this.formBuilder.group({
  //     title: ['', Validators.required],
  //     description: [''],
  //   });
  //  }

   ngOnInit() {
   }
  
  // logForm(){
  //   console.log(this.todo.value)
  // }

}
