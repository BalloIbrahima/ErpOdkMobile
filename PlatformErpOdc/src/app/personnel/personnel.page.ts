import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.page.html',
  styleUrls: ['./personnel.page.scss'],
})
export class PersonnelPage implements OnInit {
  responsive = true

  users :any
  // [
  //   {nom: "Mr Dembele", email:"idrissa@gmail.com"},
  //   {nom: "Mr SAGARA", email:"jean@gmail.com"},
  //   {nom: "Mr DIALLO", email:"abdoulaye@gmail.com"},
  //   {nom: "Mr DJENIKA", email:"abocar@gmail.com"},
  //   {nom: "Mr DJIGUIBA", email:"barema@gmail.com"},
  //   {nom: "Mr BORE", email:"souleymane@gmail.com"},
  //   {nom: "Mr DIAWARA", email:"karim@gmail.com"},
  //   {nom: "Mr BALLO", email:"ibrahim@gmail.com"},
  //   {nom: "Mr MAIGA", email:"abasse@gmail.com"},
  //   {nom: "Mr SENOU", email:"kalifa@gmail.com"},
  //   {nom: "Mr MALLE", email:"allassane@gmail.com"},
  //   {nom: "Mr TRAORE", email:"mary@gmail.com"},
  // ]
  a!:any;
  Utilisateur:any;
  longueur: any;

  constructor(private userService:UtilisateurService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {


    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
     //!::::::::::::total perso ::::::::::::
     this.userService.getAllUsers(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.users=data.data;
      this.longueur=data.data.length;
      console.log(data.data)
    });



  }

//La fonction pour recuperer les details du personnel 
  RedirigerPersonnel(id:number){
    return this.router.navigate(['/dashboard/detail-personnel',id]);
    
  }

}
