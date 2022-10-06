import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ImporterListeparticipantPage } from '../importer-listeparticipant/importer-listeparticipant.page';
import { ActiviteService } from '../services/activite/activite.service';
import { ListeService } from '../services/listes/liste.service';
// import Swal from 'sweetalert2';
// /*importer HttpClient*/
// import { HttpClient } from '@angular/common/http';
// /*importer le service*/
// import { ImporterPostulantService } from '../importer-postulant.service';
// /*importer le model*/
// import { Liste } from '../liste';
// /*importer les formgroup etc*/
// import { FormGroup, FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-importliste',
  templateUrl: './importliste.page.html',
  styleUrls: ['./importliste.page.scss'],
})
export class ImportlistePage implements OnInit {
  Utilisateur : any;
  name : String;
  fichier : any;
  idactivite:any;
  activiteselect: any;
  listeactivite : any;
constructor(private serviceliste : ListeService, private route : Router,private liste : ActiviteService){}
  succesImport() {
  //   Swal.fire({'Félicitations ...', 'Fichier importer avec succès !', 'success',
  // });
    Swal.fire({
       position:'center',
       title: 'Liste importée avec succès !\nChoisissez une action :',
       showDenyButton: true,
       showCancelButton: true,
       confirmButtonText: 'Voir la liste',
       denyButtonText: `Faire tirage`,
       denyButtonColor:'green',
       cancelButtonText: 'Annuler',
       cancelButtonColor:'red',
       heightAuto: false,
     }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
       if (result.isConfirmed) {
         //Swal.fire('Saved!', '', 'success');
        
       } else if (result.isDenied) {
         //Swal.fire('Changes are not saved', '', 'info');
         this.route.navigate(['tirage'])
       }
     });
  }

  // formgroup: FormGroup;
  // liste: Liste;
  // file: any;


  /*le declarrer ou instencier dans le controleur: HttpClient; le service; le formBuilder*/
  // constructor(public http: HttpClient, private importliste: ImporterPostulantService, private formbuilder: FormBuilder ) { }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.liste.GetTtActivite(this.Utilisateur.login, this.Utilisateur.password).subscribe(chemin=>{
      this.listeactivite = chemin.data
      console.log("afficher tous "+chemin)
    })

    // this.formgroup = this.formbuilder.group({
    //   libelle:['',Validators.required],
    //   dateimport:['', Validators.required],
    //   file:['', Validators.required],
    // })
  }

  televerser(event : any){
    this.fichier = event.target["files"][0];
  }

  public importerList() {
    for(let i = 0; i < this.listeactivite.length; i++) {
      if(this.listeactivite[i].nom == this.idactivite) {
        this.activiteselect = this.listeactivite[i]
        console.log(this.activiteselect)
      }
    }
    const requete = this.serviceliste.importerListePostulant(this.name, this.fichier, this.Utilisateur.login, this.Utilisateur.password);
    requete.subscribe({
      next: reponse => {
        console.log(reponse)
        if(reponse.message == "ok") {
          this.succesImport()
        }
        if(reponse.message == "error") {
          alert(reponse.data)
        }
        
      },
      error: reponse => {
        alert("Erreur inconnu " + reponse.message)
      }
    });
  }

  // filechange(fch:any){
  //   this.file=fch.target["files"][0]
  // }

  // addListe(){
  //   this.liste=this.formgroup.value
  //   this.importliste.ImportListe(this.liste.libelle, this.file).subscribe(
  //     data=>{
  //       this.formgroup.reset()
  //     }
  //   )
  // }

}
