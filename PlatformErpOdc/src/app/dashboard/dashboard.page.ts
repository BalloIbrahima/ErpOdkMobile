import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  img="../assets/avatar.png"
  Utilisateur:any;
  constructor(private router:Router,private menu: MenuController) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    
    if(this.Utilisateur.image!=null){
      this.img=this.Utilisateur.image
    }
    console.log(this.Utilisateur)
  }

  FermerSideBar(){
    this.menu.close()
  }

  deconnecter(){
    localStorage.clear()
    this.router.navigate(['../login'])
  }

}
