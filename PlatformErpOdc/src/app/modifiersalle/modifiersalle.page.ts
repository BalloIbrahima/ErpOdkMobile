import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { SalleServiceService } from 'src/services/salles/salle-service.service';
@Component({
  selector: 'app-modifiersalle',
  templateUrl: './modifiersalle.page.html',
  styleUrls: ['./modifiersalle.page.scss'],
})
export class ModifiersallePage implements OnInit {
  id:number = 0;
  description:string = "";
  etage: string="1 etage";
  libelle:string='';
  nombre: number = 0;
  disponibilite:string;

  constructor(private route:ActivatedRoute,private router: Router,private service: SalleServiceService) { }

  ngOnInit() {
  }


  ModifSalle(){
    this.service.ModifSalle(this.id,this.libelle,this.description,this.etage,this.nombre,).subscribe(data=>{
      console.log(data)

    });

    console.log(this.description)
  }
}
