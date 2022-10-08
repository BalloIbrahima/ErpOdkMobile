import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';

@Component({
  selector: 'app-editactivity',
  templateUrl: './editactivity.page.html',
  styleUrls: ['./editactivity.page.scss'],
})
export class EditactivityPage implements OnInit {
  Utilisateur:any
  id:any
  activitydata:any
  nom:any

  constructor( private route:ActivatedRoute,private activiteService:ActiviteService ) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    const idactivite=this.route.snapshot.params['id']
    this.id=idactivite
     console.log("recuperation de l'utilisateur "+this.Utilisateur)
console.log(this.id)
     this.activiteService.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      this.activitydata=r.data;
      console.log(this.activitydata)
      this.nom=this.activitydata.nom
    })
  }
  update(){
 
      console.log(this.id)

    this.activiteService.updatebyid(this.Utilisateur.login,this.Utilisateur.password,this.id).subscribe(data=>{
      console.log(data)


    })

  }

}
