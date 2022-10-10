import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopupNotificationPage } from '../popup-notification/PopupNotificationPage';

@Component({
  selector: 'app-cloche',
  templateUrl: './cloche.component.html',
  styleUrls: ['./cloche.component.scss'],
})
export class ClocheComponent implements OnInit {

  constructor(private router: Router,private popoverCtrl: PopoverController) { }
  pages: number = 1;
  students =[
    {
      Designation: 'tache 1',
      Realisateur: 'Abdoulaye',
      Lieu: 'salle 1',
      Statut: 'encours',
      Dated: '01-6-2022',
      Datef: '01-12-2022'
    },
    {
      Designation: 'tache 2',
      Realisateur: 'Aboubacar',
      Lieu: 'salle 2',
      Statut: 'terminé',
      Dated: '01-6-2022',
      Datef: '01-7-2022'
    },
    {
      Designation: 'tache 3',
      Realisateur: 'Karim',
      Lieu: 'salle 2',
      Statut: 'encours',
      Dated: '01-6-2022',
      Datef: '01-12-2022'
    },
    {
      Designation: 'tache 4',
      Realisateur: 'Abdoulaye',
      Lieu: 'salle 1',
      Statut: 'terminé',
      Dated: '01-3-2022',
      Datef: '01-6-2022'
    },
    {
      Designation: 'tache 5',
      Realisateur: 'Ousmane',
      Lieu: 'salle 1',
      Statut: 'terminé',
      Dated: '01-8-2022',
      Datef: '01-9-2022'
    },
    {
      Designation: 'tache 6',
      Realisateur: 'Ousmane',
      Lieu: 'salle 1',
      Statut: 'terminé',
      Dated: '01-8-2022',
      Datef: '01-9-2022'
    },
    {
      Designation: 'tache 5',
      Realisateur: 'Ousmane',
      Lieu: 'salle 1',
      Statut: 'terminé',
      Dated: '01-8-2022',
      Datef: '01-9-2022'
    },
  ];


  ngOnInit() {}

  async OpenNotification(id){
    // this.router.navigate((['tabs',"message",id]));
      const popover = await this.popoverCtrl.create({
        component:PopupNotificationPage,
        event:id,
        cssClass:"notif-popup"
      });
      await popover.present()
  }


}
