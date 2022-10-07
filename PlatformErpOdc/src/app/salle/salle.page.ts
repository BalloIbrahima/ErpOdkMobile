import { Component, OnInit } from '@angular/core';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})
export class SallePage implements OnInit {

  sallesDipo:any;
  sallesDipoLength:any;
  sallesIndispoLength:any
  url="/modifier-salle"

  sallesIndispo:any;
  Utilisateur:any;
  id: number;
  constructor(private userService:UtilisateurService,private salleService:SalleServiceService) { }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));

     //!::::::::::::total perso ::::::::::::


     this.salleService.getSalleDisponible(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.sallesDipo=data.data;
      this.sallesDipoLength=data.data.length
      console.log("les salle disponible")
      console.log(data.data)
    });

    this.salleService.getSallesIndispo(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.sallesIndispo=data.data;
      this.sallesIndispoLength=data.data.length
      console.log(data.data)
    });


    this.salleService.supprimerSalles(this.Utilisateur.login, this.Utilisateur.password, this.id).subscribe(data => {
      this.sallesIndispo=data.data;
      this.sallesIndispoLength=data.data.length
      console.log(data.data)
    })

  }

}
