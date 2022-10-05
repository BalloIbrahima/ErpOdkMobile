import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActiviteService } from '../services/activite/activite.service';

@Component({
  selector: 'app-importer-listeparticipant',
  templateUrl: './importer-listeparticipant.page.html',
  styleUrls: ['./importer-listeparticipant.page.scss'],
})
export class ImporterListeparticipantPage implements OnInit {

  listeactivite:any;
   Utilisateur:any;

  constructor( private liste:ActiviteService, private chemin: Router) { }
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
        cancelButtonColor:'red',
        heightAuto: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          //Swal.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
          //Swal.fire('Changes are not saved', '', 'info');
        }
      });
    }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
     console.log(this.Utilisateur)
    // this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    this.liste.GetTtActivite(this.Utilisateur.login, this.Utilisateur.password).subscribe(chemin=>{
      this.listeactivite = chemin.data
      console.log("afficher tous "+chemin)
    })
  }

}
