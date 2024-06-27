import { Component } from '@angular/core';
import { CardHorizontalComponent } from '../../shared/components/card-horizontal/card-horizontal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CardHorizontalComponent,CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  dataCardH = {
    image: '/images/features/desktop/hero.jpg',
    title: 'FEATURES',
    description:
      'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
    isImageLeft: true,
    isFirstEelement: true,
  };

  listBottom = [
    {
      icon: '/images/features/desktop/responsive.svg',
      title: '100% Responsive',
      text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    },
    {
      icon: 'images/features/desktop/no-limit.svg',
      title: 'No Photo Upload Limit',
      text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      icon: 'images/features/desktop/embed.svg',
      title: 'Available to Embed',
      text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
    },
    {
      icon: '/images/features/desktop/custom-domain.svg',
      title: 'Custom Domain',
      text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    },
    {
      icon: '/images/features/desktop/boost-exposure.svg',
      title: 'Boost Your Exposure',
      text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    },
    {
      icon: '/images/features/desktop/drag-drop.svg',
      title: 'Drag & Drop Image',
      text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    },
  ];
}
