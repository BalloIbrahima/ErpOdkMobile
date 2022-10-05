import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';

@Component({
  selector: 'app-detailactivity',
  templateUrl: './detailactivity.page.html',
  styleUrls: ['./detailactivity.page.scss'],
})
export class DetailactivityPage implements OnInit {

  pages!: any;
  a!: any
  activite:any;
  Utilisateur:any;
  nom:any

  Status:any
  salles:any
  leadnom:any
  leadprenom:any

  aaa:any
  constructor(private activiteservice:ActiviteService, private route:ActivatedRoute) { }


  ngOnInit() {
    const idactivite=this.route.snapshot.params['id']
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    //console.log(idactivite)
    console.log("recuperation de l'utilisateur "+this.Utilisateur)
    this.activiteservice.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      this.activite=r.data;
      console.log("recuperer detail activity//////////////////////////"+this.activite)
      this.nom=this.activite.nom
      this.salles=this.activite.salle.libelle
      this.leadnom=this.activite.leader.nom
      this.leadprenom=this.activite.leader.prenom


    })

    this.activiteservice.GetActiviteStatut(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      console.log(r)
      this.Status=r.message;
    })

    

  }


  students =[
    {
        name: 'Djiguiba',
        prenom: 'Barema',
        genre: 'Masculin',
        email: 'djiguiba@orangemali.com',
        contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  }
  
  ];
   
  
   
 

}
