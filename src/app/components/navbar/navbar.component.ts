import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren  } from '@angular/core';
import { gsap } from 'gsap'


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit() {

  }

  currentSection: string = '';

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['home', 'projetos', 'contato'];

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const top = section.getBoundingClientRect().top;

        if (top >= -100 && top < 600) {
          this.currentSection = sectionId;
          return;
        }
      }
    }

    this.currentSection = '';
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
