import { Component } from '@angular/core';
import { CardHorizontalComponent } from '../../shared/components/card-horizontal/card-horizontal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CardHorizontalComponent, CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  isMonthly: boolean = true;
  dataCardH = {
    image: '/images/pricing/desktop/hero.jpg',
    title: 'PRICING',
    description:
      'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
    isImageLeft: true,
    isFirstEelement: true,
  };

  dataTable = [
    {
      feature: 'UNLIMITED STORY POSTING',
      basic: true,
      pro: true,
      business: true,
    },
    {
      feature: 'UNLIMITED PHOTO UPLOAD',
      basic: true,
      pro: true,
      business: true,
    },
    {
      feature: 'EMBEDDING CUSTOM CONTENT',
      basic: false,
      pro: true,
      business: true,
    },
    {
      feature: 'CUSTOMIZE METADATA',
      basic: false,
      pro: true,
      business: true,
    },
    {
      feature: 'ADVANCED METRICS',
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: 'PHOTO DOWNLOADS',
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: 'SEARCH ENGINE INDEXING',
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: 'CUSTOM ANALYTICS',
      basic: false,
      pro: false,
      business: true,
    },
  ];
}
