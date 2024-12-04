import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements AfterViewInit {

  @ViewChildren('listaItens') listaItens!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()

    tl.to(".title", {
        duration: .5,
        color: "hsl(29, 65%, 69%)",
        textShadow: "1px 1px 20px rgba(143, 81, 1, 0.842)",
        ease: "bounce.in",
        opacity: 1,
        scrollTrigger: ".copyright",
      })

    this.listaItens.forEach((item, index) => {
      tl.to(item.nativeElement, {
        duration: .5,
        opacity: 1,
        delay: index * .5, // Atraso progressivo para cada <li>
        scrollTrigger: ".copyright",
        color: "hsl(0, 0%, 80%)",
        textShadow: "1px 1px 1px rgba(109, 108, 107, 0)",
        ease: "back.in(1.7)",
      }, "+=1.5")

    });

  }
}
