import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.page.html',
  styleUrls: ['./personnel.page.scss'],
})
export class PersonnelPage implements OnInit {
  responsive = true

  users :any
  a!:any;
  Utilisateur:any;
  

  constructor(private userService:UtilisateurService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
     //!::::::::::::total perso ::::::::::::
     this.userService.getAllUsers(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.users=data.data;
      console.log(data.data)
    });

  }

}
