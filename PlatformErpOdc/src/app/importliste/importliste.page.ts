import { Component, OnInit } from '@angular/core';
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
constructor(){}
  succesImport() {
  //   Swal.fire({'Félicitations ...', 'Fichier importer avec succès !', 'success',
  // });
    // Swal.fire({
    //   position:'center',
    //   title: 'Liste importée avec succès !\nChoisissez une action :',
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: 'Voir la liste',
    //   denyButtonText: `Faire tirage`,
    //   denyButtonColor:'green',
    //   cancelButtonText: 'Annuler',
    //   cancelButtonColor:'red',
    //   heightAuto: false,
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     //Swal.fire('Saved!', '', 'success');
    //   } else if (result.isDenied) {
    //     //Swal.fire('Changes are not saved', '', 'info');
    //   }
    // });
  }

  // formgroup: FormGroup;
  // liste: Liste;
  // file: any;


  /*le declarrer ou instencier dans le controleur: HttpClient; le service; le formBuilder*/
  // constructor(public http: HttpClient, private importliste: ImporterPostulantService, private formbuilder: FormBuilder ) { }

  ngOnInit() {
    // this.formgroup = this.formbuilder.group({
    //   libelle:['',Validators.required],
    //   dateimport:['', Validators.required],
    //   file:['', Validators.required],
    // })
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