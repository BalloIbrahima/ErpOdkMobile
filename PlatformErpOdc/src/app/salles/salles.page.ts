import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalleServiceService } from '../services/salles/salle-service.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.page.html',
  styleUrls: ['./salles.page.scss'],
})
export class SallesPage implements OnInit {

  User:any;
  Salles:any;
  isSuperAdmin:boolean
  disponible:String;
  constructor(public router:Router, private salleService:SalleServiceService) { }

  ngOnInit() {
    this.User=JSON.parse(localStorage.getItem('utilisateur'))

    if(this.User.role.libellerole=="ADMIN"){
      this.isSuperAdmin=true
    }else{
      this.isSuperAdmin=false
    }
    this.salleService.recupererSalles().subscribe(data=>{
      if(data.message=='ok'){
        this.Salles=data.data
        if(this.Salles.disponible==true){
          this.disponible="Disponible"
        }else{
          this.disponible="Indisponible"

        }
      }
    })
    this.Salles
  }

    

}
