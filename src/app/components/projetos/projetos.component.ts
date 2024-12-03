import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent implements AfterViewInit {

  @ViewChild('conteiner__projetos', { static: true })
  conteiner__projetos!: ElementRef;

  @ViewChildren('listaItens') listaItens!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".conteiner__projetos", {
      x:-200,
      duration: 1,
      opacity: 0,
      scrollTrigger: ".conteiner__projetos"
    })

    this.listaItens.forEach((item, index) => {
      gsap.from(item.nativeElement, {
        duration: .5,
        opacity: 0,
        y: -50,
        delay: index * .2, // Atraso progressivo para cada <li>
        scrollTrigger: ".conteiner__projetos",
        color: "hsl(0, 0%, 100%)",
        textShadow: "1px 1px 1px rgba(109, 108, 107, 0)",
        ease: "back.in(1.7)",
      })

    });

  }

}
