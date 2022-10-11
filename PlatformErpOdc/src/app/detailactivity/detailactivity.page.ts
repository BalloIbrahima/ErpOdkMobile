import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import * as XLSX from "xlsx";

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
  image:any
  salles:any
  leadnom:any
  leadprenom:any
  suppvar:any
  dateDebut:any
dateFin:any


  aaa:any
  idact:any
  byentity:any
//act a venir rediriger vers son detail()id
  constructor(private activiteservice:ActiviteService, private route:ActivatedRoute) { }

  id:any;
  

  ngOnInit() {

    const idactivite=this.route.snapshot.params['id']
    this.id=idactivite
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    this.idact=idactivite
    //console.log(idactivite)
    console.log("recuperation de l'utilisateur "+this.Utilisateur)
    this.activiteservice.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      this.activite=r.data;
      console.log(this.activite)
      this.nom=this.activite.nom
      this.salles=this.activite.salle.libelle
      this.leadnom=this.activite.leader.nom
      this.leadprenom=this.activite.leader.prenom
      this.image=this.activite.image
      this.dateDebut=this.activite.dateDebut
      this.dateFin=this.activite.dateFin
    })

    this.activiteservice.GetActiviteStatut(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      console.log(r)
      this.Status=r.message;
      console.log(this.Status)
    })

    this.activiteservice.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      console.log(r)
      this.byentity=r.message;
      console.log(this.byentity)
    })

  }

  //l'id a appliquer au tableau
  id1="season-tble"
  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

   supprimeractivite(){
    this.activiteservice.deletebyid(this.Utilisateur.login,this.Utilisateur.password,this.idact).subscribe(
      d=>{
        console.log(d)
      this.suppvar=d.message;
      console.log(this.suppvar)
      }
    )   }




    //en attente back
    importerliste(){

    }







}
