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
