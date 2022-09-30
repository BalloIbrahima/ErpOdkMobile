import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { SalleServiceService } from 'src/app/services/salles/salle-service.service';

@Component({
  selector: 'app-addsalle',
  templateUrl: './addsalle.page.html',
  styleUrls: ['./addsalle.page.scss'],
})
export class AddsallePage implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router,private service: SalleServiceService) { }
  id:number = 0;
description:string = "";
etage: string="1 etage";
libelle:string='';
nombre: number = 0;
disponibilite:string;

User:any;
  ngOnInit() {
    this.User=JSON.parse(localStorage.getItem('utilisateur'))
   console.log(this.User)
  }

  AjoutSalle(){
    this.service.ajoutSalle(this.User.id,this.libelle,this.description,this.etage,this.nombre,).subscribe(data=>{
      console.log(data)

    });

    console.log(this.description)
  }

}
