import { Component, OnInit } from '@angular/core';
import { AccueilserviceService } from '../services/acceuil/accueilservice.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
totalactivite:any;
totlapostulant:any;
totalentite:any;
Utilisateur:any;
totalEntite:any;



  constructor(private route:ActivatedRoute,private router: Router,private service:AccueilserviceService) { }

  ngOnInit() {


    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur.login)

    this.service.GetAllEntite(this.Utilisateur.login, this.Utilisateur.password).subscribe(data=>{

      this.totalEntite= data.data;
      console.log(data)
      
    });


    // ;:::::::::::total acTIVITE ::::::::::::
    this.service.GetActviteTotal().subscribe(data=>{
      this.totalactivite=data.data;
console.log(data)
    });

    //!::::::::::::total perso ::::::::::::
    this.service.GetPersonnelTotal().subscribe(data=>{
      this.totlapostulant=data.data;
console.log(data)
    });

     //!::::::::::::total perso ::::::::::::
     this.service.GetEntiteTotal().subscribe(data=>{
      this.totalentite=data.data;
console.log(data)
    });


  
  }
  }

  


