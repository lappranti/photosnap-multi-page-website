import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  links = [
    {
      label: 'HOME',
      url: '/home',
    },
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
}
