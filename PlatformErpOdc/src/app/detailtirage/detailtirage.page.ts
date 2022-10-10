import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeService } from '../services/listes/liste.service';

@Component({
  selector: 'app-detailtirage',
  templateUrl: './detailtirage.page.html',
  styleUrls: ['./detailtirage.page.scss'],
})
export class DetailtiragePage implements OnInit {

  Utilisateur:any;
  page:number=0;
  idT:any;
  resultTir:any;
  resultTirs:any;

  Tirage:any

  constructor(private route:ActivatedRoute, private service: ListeService) { }

  ngOnInit() {

    this.idT = this.route.snapshot.params['idT']
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
      console.log(this.Utilisateur.login)
      console.log(this.idT)

      this.service.GetListeParId(this.Utilisateur.login,this.Utilisateur.password,this.idT).subscribe(data=>{

        console.log(data)
        this.resultTir=data.data.tirages;

        for(let i=0;i<this.resultTir.length;i++){

           if(this.resultTir[i].id==this.idT){
            console.log(this.resultTir[i].postulanttires);

            this.Tirage=this.resultTir[i].postulanttires
          }
        }
  
      })
         

  }

}
