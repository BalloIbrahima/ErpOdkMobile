import { Component, OnInit } from '@angular/core';
import { TirageService } from '../services/tirage/tirage.service';

@Component({
  selector: 'app-detail-tirage-dune-liste',
  templateUrl: './detail-tirage-dune-liste.page.html',
  styleUrls: ['./detail-tirage-dune-liste.page.scss'],
})
export class DetailTirageDuneListePage implements OnInit {

  p: number=1;
  searchText:any;
  totaltirage:any
  Utilisateur:any;
  constructor(public service: TirageService) { }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
      console.log(this.Utilisateur.login)

      this.service.GetTotalTirage(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
        this.totaltirage=data.data;
        console.log(data)
        console.log(data.data.length)
      });

      
  }

  
 


}
