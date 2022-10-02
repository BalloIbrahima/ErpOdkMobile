import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-importer-listeparticipant',
  templateUrl: './importer-listeparticipant.page.html',
  styleUrls: ['./importer-listeparticipant.page.scss'],
})
export class ImporterListeparticipantPage implements OnInit {

  constructor() { }
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
  }

}
