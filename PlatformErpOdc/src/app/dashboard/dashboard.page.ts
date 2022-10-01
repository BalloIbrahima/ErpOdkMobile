import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  img="../assets/avatar.png"
  Utilisateur:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    if(this.Utilisateur.image!=null){
      this.img=this.Utilisateur.image
    }
    console.log(this.Utilisateur)
  }



  deconnecter(){
    localStorage.clear()
    this.router.navigate(['../login'])
  }

}
