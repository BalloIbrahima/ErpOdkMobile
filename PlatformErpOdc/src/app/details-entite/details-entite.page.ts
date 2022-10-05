import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailentiteService } from '../services/detailsentit/detailentite.service';
import { EntiteService } from '../services/entite/entite.service';

@Component({
  selector: 'app-details-entite',
  templateUrl: './details-entite.page.html',
  styleUrls: ['./details-entite.page.scss'],
})
export class DetailsEntitePage implements OnInit {
  responsive = true
  autoHide = true
  students = [
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
  nomResponsable: any;
  prenomResponsable: any;
  constructor(private router: Router, private route: ActivatedRoute, private entiteService: EntiteService, private entitedetailservice: DetailentiteService) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering, @typescript-eslint/type-annotation-spacing
  a!: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  pages!: any;
  identite: any;
  Utilisateur: any;
  entites: any;

  nomEntite:any;
  statusResponsable!:any
  descriptionEntite!:any
  imageEntite!: any
  ngOnInit() {

    this.identite = this.route.snapshot.params['id'];
    console.log(this.identite)
    //  this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'))

    console.log(this.Utilisateur)
    this.entitedetailservice.voirdetailsEntiteid(this.Utilisateur.login, this.Utilisateur.password, this.identite).subscribe(data => {
      this.entites = data.data
      console.log(this.entites.libelleentite)
      this.nomEntite=this.entites.libelleentite
      this.statusResponsable = this.entites.createur.role.libellerole
      this.descriptionEntite = this.entites.description
      this.nomResponsable = this.entites.gerant.nom
      this.prenomResponsable = this.entites.gerant.prenom
      this.imageEntite = this.entites.image
    })



  }

}
