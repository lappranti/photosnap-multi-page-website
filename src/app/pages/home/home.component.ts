import { Component } from '@angular/core';
import { CardHorizontalComponent } from '../../shared/components/card-horizontal/card-horizontal.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardHorizontalComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listBottom = [
    {
      icon: '/images/home/desktop/responsive.svg',
      title: '100% Responsive',
      text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    },
    {
      icon: 'images/home/desktop/forever.svg',
      title: 'No Photo Upload Limit',
      text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      icon: 'images/home/desktop/bullhorn.svg',
      title: 'Available to Embed',
      text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
    },
  ];

  listHorizontalCard = [
    {
      image: '/images/home/desktop/create-and-share.jpg',
      title: `Create and share your photo stories. `,
      description: `Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.`,
      textBtn: `GET AN INVITE`,
      isImageLeft: true,
      isFirstEelement: true,
    },
    {
      image: '/images/home/desktop/beautiful-stories.jpg',
      title: `BEAUTIFUL STORIES EVERY TIME `,
      description: `We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.`,
      textBtn: `VIEW THE STORIES`,
      isImageLeft: false,
    },
    {
      image: '/images/home/desktop/designed-for-everyone.jpg',
      title: `DESIGNED FOR EVERYONE `,
      description: `Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. `,
      textBtn: `VIEW THE STORIES`,
      isImageLeft: true,
    },
  ];

  listCard = [
    {
      image: '/images/stories/desktop/mountains.jpg',
      title: 'The Mountains',
      description: 'by John Appleseed',
    },
    {
      image: '/images/stories/desktop/cityscapes.jpg',
      title: 'Sunset Cityscapes',
      description: 'by Benjamin Cruz',
    },
    {
      image: '/images/stories/desktop/18-days-voyage.jpg',
      title: '18 Days Voyage',
      description: 'by Alexei Borodin',
    },
    {
      image: '/images/stories/desktop/architecturals.jpg',
      title: 'Architecturals',
      description: 'by Samantha Brooke',
    },
  ];
}
