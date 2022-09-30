import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.page.html',
  styleUrls: ['./popup-notification.page.scss'],
})
export class PopupNotificationPage implements OnInit {
  p:number = 1;
  constructor() { }
  salleactivites=[
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    }

  ]
  close(){
    
  }

  ngOnInit() {
  }

}
