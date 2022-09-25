import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { SalleServiceService } from 'src/app/services/salles/salle-service.service';
@Component({
  selector: 'app-modifiersalle',
  templateUrl: './modifiersalle.page.html',
  styleUrls: ['./modifiersalle.page.scss'],
})
export class ModifiersallePage implements OnInit {
  id:number = 0;
  description:string = "rr";
  etage: string="1 etage";
  libelle:string='';
  nombre: number = 0;
  disponibilite:string;

  salle:any;
  constructor(private route:ActivatedRoute,private router: Router,private service: SalleServiceService) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id']
    console.log(id)

    this.service.getSalleParId(id).subscribe(data=>{
      if(data.message=='ok'){
        this.salle=data.data
        //console.log(this.salle)

        this.libelle=this.salle.libelle
        this.etage=this.salle.etage
        this.description=this.salle.description
        this.nombre=this.salle.nombreplace

      }
    })
  }


  ModifSalle(){
    

    this.service.ModifSalle(this.salle.id,this.libelle,this.description,this.etage,this.nombre,this.salle.disponibilite).subscribe(data=>{
      console.log(data)

    });

    console.log(this.description)
  }
}
