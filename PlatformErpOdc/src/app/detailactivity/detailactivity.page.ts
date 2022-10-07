import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import * as XLSX from "xlsx"
import Swal from 'sweetalert2';

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
  updatevar:any
  postulants:any
  dateDebut:any
dateFin:any


  aaa:any
  idact:any
  byentity:any
  nombreLingne: any
  nombreLingne1 = 8;

//act a venir rediriger vers son detail()id
  constructor(private activiteservice:ActiviteService,private navv:NavController, private route:ActivatedRoute) { }

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

    this.activiteservice.getallpostulantsbyidact(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      console.log(r)
      this.postulants=r.data;
      this.nombreLingne = this.postulants.length
      console.log(this.postulants.length)

    })

    this.activiteservice.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      console.log(r)
      this.byentity=r.message;
      console.log(this.byentity)
    })

  }

  envoyernombre(){

    this.nombreLingne1 = this.nombreLingne

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
  succesImport() {
    //   Swal.fire({'Félicitations ...', 'Fichier importer avec succès !', 'success',
    // });
    Swal.fire({
        position:'center',
        title: 'Liste importée avec succès !\nVoulez-vous voir la liste :',
        //showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Oui',
        //denyButtonText: `Faire tirage`,
        //denyButtonColor:'green',
        cancelButtonText: 'Non',
        cancelButtonColor:'#FF7900',
        heightAuto: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
         this.navv.navigateRoot('detailactivite,idactivite')
        } else if (result.isDenied) {
          this.navv.navigateRoot('detailactivite')
          
        }
      });
    }

   supprimeractivite(){
    this.activiteservice.deletebyid(this.Utilisateur.login,this.Utilisateur.password,this.idact).subscribe(
      d=>{
        console.log(d)
      this.suppvar=d.message;
      console.log(this.suppvar)
      
    if(d.message=="ok"){
      this.succesImport();
    }

          

      }
    )
    

  }
  update(){
    this.activiteservice.updatebyid(this.Utilisateur.login,this.Utilisateur.password,this.idact).subscribe(
      d=>{
        console.log(d)
      this.updatevar=d.message;
      console.log(this.updatevar)
      }
    )
  }




    //en attente back
    importerliste(){

    }







}
