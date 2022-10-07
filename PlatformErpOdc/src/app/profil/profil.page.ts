import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

// 
nom:any;
prenom:any;
entité:any;
persoEnt:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
