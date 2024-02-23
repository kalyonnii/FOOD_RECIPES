import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 100; // Show the button after scrolling down 100px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
