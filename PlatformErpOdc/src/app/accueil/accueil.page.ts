import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  change():any{
    
  var
  carousel = document.querySelector('.carousel'),
  figure = carousel.querySelector('figure'),
  nav = carousel.querySelector('nav'),
  numImages = figure.childElementCount,
  theta =  2 * Math.PI / numImages,
  currImage = 0;
  
  nav.addEventListener('click', onClick, true);
  
  function onClick(e) {
  e.stopPropagation();
  
  var t = e.target;
  
  
  if (t.tagName.toUpperCase() != 'BUTTON')
  return;
  
  if (t.classList.contains('suiv')) {
  currImage++;
  }
  else if(t.classList.contains('pre')) {
  currImage--;
  }
  
  
  figure.style.transform = `rotateY(${currImage * -theta}rad)`;
  }
  }

}
