import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { AccueilserviceService } from '../services/acceuil/accueilservice.service';
import { ActiviteService } from '../services/activite/activite.service';

@Component({
  selector: 'app-allactivity',
  templateUrl: './allactivity.page.html',
  styleUrls: ['./allactivity.page.scss'],
})
export class AllactivityPage implements OnInit {

  p:number = 1;
  touteactivite:any;
  Utilisateur:any;
  constructor(private route:ActivatedRoute,private router: Router,private service:ActiviteService) { }
  allactivites=[
    {
      titre:"Python",
      type:"Formation",
      description:"La formation est de 6 mois au sein de ODC Mali La formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC Mali",
      status:"En cours"
    },
    {
      titre:"Python",
      type:"Formation",
      description:"La formation est de 6 mois au sein de ODC Mali La formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC Mali",
      status:"En cours"
    },
    {
      titre:"Python",
      type:"Formation",
      description:"La formation est de 6 mois au sein de ODC Mali La formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC Mali",
     status:"En cours"
    },
    {
      titre:"Python",
      type:"Formation",
      description:"La formation est de 6 mois au sein de ODC Mali La formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC Mali",
      status:"En cours"
    },
    {
      titre:"Python",
      type:"Formation",
      description:"La formation est de 6 mois au sein de ODC Mali La formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC Mali",
     status:"En cours"
    },
    {
      titre:"Python",
      type:"Formation",
      description:"La formation est de 6 mois au sein de ODC Mali La formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC Mali",
      status:"En cours"
    },
    {
      titre:"Python",
      type:"Formation",
      description:"La formation est de 6 mois au sein de ODC Mali La formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC MaliLa formation est de 6 mois au sein de ODC Mali",
      status:"En cours"
    }

  ]

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
    //console.log(this.Utilisateur.password)


    this.service.GetTtActivite(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.touteactivite=data.data;
      console.log(data.data)
    });
  }

}
