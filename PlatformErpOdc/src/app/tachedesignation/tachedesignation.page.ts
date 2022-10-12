import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TachedesignationService } from '../services/tahedesignations/tachedesignation.service';

@Component({
  selector: 'app-tachedesignation',
  templateUrl: './tachedesignation.page.html',
  styleUrls: ['./tachedesignation.page.scss'],
})
export class TachedesignationPage implements OnInit {
  a!:any
  id:number
  taches:any
  Utilisateur:any;
  p:any
  constructor(private route:ActivatedRoute, private tachedesignationService:TachedesignationService) { }

  ngOnInit() {

     this.id=this.route.snapshot.params['id'];
     this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
    this.alltaches()

  }
  alltaches(){

    this.tachedesignationService.getAlltaches(this.Utilisateur.login, this.Utilisateur.password,this.id).subscribe(retour => {
      this.taches = retour.data;
      console.log(this.taches);
    });
  }
  ionViewWillEnter(){
    this.alltaches()
  }


  

}

