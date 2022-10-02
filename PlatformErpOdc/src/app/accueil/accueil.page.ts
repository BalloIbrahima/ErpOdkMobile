
// import { Component, OnInit } from '@angular/core';
import { AccueilserviceService } from '../services/acceuil/accueilservice.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


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
personneActive:any;
touteactivite:any;
activiteEncours:any;
activiteAvenir:any;

image = 'https://www.decome-store.fr/27073-thickbox_pbm/mini-voiture-laferrari-pour-enfant-50w.jpg'
@ViewChild(IonSlides) slides: IonSlides;

  constructor(private route:ActivatedRoute,private router: Router,private service:AccueilserviceService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur.login)
    // ;:::::::::::total acTIVITE ::::::::::::
    this.service.GetActviteTotal(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
    // ;:::::::::::total acTIVITE ::::::::::::
      this.totalactivite=data.data;
console.log(data)
    });

    //!::::::::::::total perso ::::::::::::
    this.service.GetPersonnelActivTotal(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.personneActive=data.data.length;
console.log(data.data.length)
    });

    //::::::::::::::: ::::::::::::::::::Activite en cour ::::::::::::::
                this.service.GetActiviteEncour(this.Utilisateur.id).subscribe(data=>{
                  this.activiteEncours=data.data;
            console.log(data.data)
                });


                 //::::::::::::::: ::::::::::::::::::Activite avenir ::::::::::::::
                 this.service.GetActiviteAvenir(this.Utilisateur.id).subscribe(data=>{
                  this.activiteAvenir=data.data;
            console.log(data.data)
                });




    //TOUTES LES ACTIVITES :::::::::::::::::::::
    this.service.GetToutesActivites(this.Utilisateur.id).subscribe(data=>{
      this.touteactivite=data.data;
console.log(this.touteactivite)
    });

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

  slideOpts = {
    speed: 10000
   };

  change():any{
    
  var
  carousel = document.querySelector('.carousel'),
  figure = carousel.querySelector('figure'),
  nav = carousel.querySelector('nav'),
  numImages = figure.childElementCount,
  theta =  2 * Math.PI / numImages,
  currImage = 0;
  
  nav.addEventListener('click', onClick, true);
  
  function onClick(e) {
  e.stopPropagation();
  
  var t = e.target;
  
  
  if (t.tagName.toUpperCase() != 'BUTTON')
  return;
  
  if (t.classList.contains('suiv')) {
  currImage++;
  }
  else if(t.classList.contains('pre')) {
  currImage--;
  }
  
  
  figure.style.transform = `rotateY(${currImage * -theta}rad)`;
  }
  }


  //::::::::
  givesrc(id:any):String{
    console.log(id)
    for(var i=0;i<this.totalactivite.length;i++){
      if(this.totalactivite[i].id==id){
        return this.totalactivite.image
      }return null;
    }
  }
}


 


