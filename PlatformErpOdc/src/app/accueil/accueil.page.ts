import { Component, OnInit } from '@angular/core';
import { AccueilserviceService } from '../accueilservice.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
totalactivite:any;
totlapostulant:any;
totalentite:any;


  constructor(private route:ActivatedRoute,private router: Router,private service:AccueilserviceService) { }

  ngOnInit() {
    // ;:::::::::::total acTIVITE ::::::::::::
    this.service.GetActviteTotal().subscribe(data=>{
      this.totalactivite=data.data;
console.log(data)
    });

    //!::::::::::::total perso ::::::::::::
    this.service.GetPersonnelTotal().subscribe(data=>{
      this.totlapostulant=data.data;
console.log(data)
    });

     //!::::::::::::total perso ::::::::::::
     this.service.GetEntiteTotal().subscribe(data=>{
      this.totalentite=data.data;
console.log(data)
    });
  }
  }

  


