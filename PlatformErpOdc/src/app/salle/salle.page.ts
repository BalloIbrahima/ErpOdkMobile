import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})
export class SallePage implements OnInit {

  sallesSupp:any;
  sallesDipo:any;
  sallesDipoLength:any;
  sallesIndispoLength:any
  url="/modifier-salle"
  id: number = 0;

  sallesIndispo:any;
  Utilisateur:any;
  constructor(private userService:UtilisateurService,private salleService:SalleServiceService, private route:ActivatedRoute,  private router: Router) { }
  ngOnInit() {
    //  this.id =+this.route.snapshot.params['id']
    console.log(this.id)

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));

     //!::::::::::::total perso ::::::::::::


     this.salleService.getSalleDisponible(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.sallesDipo=data.data;
      this.sallesDipoLength=data.data.length
      console.log(data.data)
    });

    this.salleService.getSallesIndispo(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.sallesIndispo=data.data;
      this.sallesIndispoLength=data.data.length
      console.log(data.data)
    });

    
    // this.suppSalles()


  }

    suppSalles(id:any){
      console.log(id)
      this.salleService.supprimerSalle(this.Utilisateur.login, this.Utilisateur.password,id).subscribe(data => {
       
        this.sallesSupp=data.data;
        console.log(data.data);
        
      });
    }

  

} 
