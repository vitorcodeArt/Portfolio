import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { BannerComponent } from "../banner/banner.component";
import { ProjetosComponent } from '../projetos/projetos.component';
import { gsap } from 'gsap';
import { ContatoComponent } from "../contato/contato.component";


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, BannerComponent, ProjetosComponent, ContatoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild('app-navbar', { static: true }) menu_bar!: ElementRef;

  ngOnInit(): void {
    //sequenced one-after-the-other
    const tl = gsap.timeline();

    tl.to(this.menu_bar.nativeElement, { duration: 2, x: 100 }) //notice that there's no semicolon!
    .to(".box2", { duration: 1, y: 200 })
    .to(".box3", { duration: 3, rotation: 360 });
  }

}
