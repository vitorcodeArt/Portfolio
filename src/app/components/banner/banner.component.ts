import { AfterViewInit, Component, ElementRef, OnInit, ViewChild }
 from '@angular/core';

import { gsap } from 'gsap';


@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('content__linguagem', { static: true })
  linguagem!: ElementRef;
  @ViewChild('content__nome', { static: true })
  nome!: ElementRef;
  @ViewChild('text1', { static: true })
  text1!: ElementRef;
  @ViewChild('text3', { static: true })
  text3!: ElementRef;
  @ViewChild('content__office', { static: true })
  content__office!: ElementRef;
  @ViewChild('sobreMim', { static: true })
  sobreMim!: ElementRef;
  @ViewChild('title', { static: true })
  title!: ElementRef;


  ngAfterViewInit() {
      const tl = gsap.timeline()
      tl.to(this.nome.nativeElement, {
        duration: 1,
        color: "hsl(29, 65%, 69%)",
        textShadow: "1px 1px 20px rgba(143, 81, 1, 0.842)",
        ease: "bounce.in",
        opacity: 1,
      }, "+=2")
      .to(this.linguagem.nativeElement, {
        duration: .5,
        color: "hsl(29, 65%, 69%)",
        textShadow: "1px 1px 20px rgba(143, 81, 1, 0.842)",
        ease: "bounce.in",
        opacity: 1,
      })
      .to(this.text1.nativeElement, {
        duration: .5,
        color: "hsl(0, 0%, 9%)",
        textShadow: "-2px -2px 10px rgba(0, 0, 0, 0.842)",
        ease: "bounce.in",
        opacity: .2,
      }, "+=1")
      .to(this.text3.nativeElement, {
        duration: .8,
        color: "hsl(29, 65%, 69%)",
        textShadow: "1px 1px 20px rgba(143, 81, 1, 0.842)",
        ease: "bounce.in",
        opacity: 1,
      })
      .from(this.content__office.nativeElement, {
        duration: 1,
        x: -100,
        opacity: 0,
      }, "-=4")
      tl.fromTo(this.title.nativeElement, {
        y: -100,
        opacity: 0.3
      },
        {
        y: 0,
        duration: 1,
        color: "hsl(29, 65%, 69%)",
        textShadow: "1px 1px 20px rgba(143, 81, 1, 0.842)",
        ease: "bounce.in",
        opacity: 0.9,
      }, "-=3")
      tl.fromTo(this.sobreMim.nativeElement, {
        y: -100,
        opacity: 0.3
      },
      {
        y: 0,
        duration: 1,
        color: "rgb(211 205 205 / 97%)",
        textShadow: '-2px -2px 10px rgba(138, 138, 138, 0.842)',
        ease: "bounce.in",
        opacity: 0.9,
      }, "-=2.5")
  }
}
