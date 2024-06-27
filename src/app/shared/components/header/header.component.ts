import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links = [
    {
      label: 'STORIES',
      url: '/stories',
    },
    {
      label: 'FEATURES',
      url: 'features',
    },
    {
      label: 'PRICING',
      url: 'pricing',
    },
  ];

  menuMobile: boolean = false;

  toggleMenuMobile() {
    this.menuMobile = !this.menuMobile;
  }

  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.menuMobile && this.btn && this.menu) {
      this.handleClickOutside(event);
    }
  }

  handleClickOutside(event: Event) {
    if (
      !this.menu.nativeElement.contains(event.target) &&
      !this.btn.nativeElement.contains(event.target)
    ) {
      this.menuMobile = false;
    }
  }
}
