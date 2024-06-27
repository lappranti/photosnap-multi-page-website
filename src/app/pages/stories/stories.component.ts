import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss',
})
export class StoriesComponent {
  listCard = [
    {
      image: '/images/stories/desktop/mountains.jpg',
      date: 'April 16th 2020',
      title: 'The Mountains',
      description: 'by John Appleseed',
    },
    {
      image: '/images/stories/desktop/cityscapes.jpg',
      date: 'April 14th 2020',
      title: 'Sunset Cityscapes',
      description: 'by Benjamin Cruz',
    },
    {
      image: '/images/stories/desktop/18-days-voyage.jpg',
      date: 'April 11th 2020',
      title: '18 Days Voyage',
      description: 'by Alexei Borodin',
    },
    {
      image: '/images/stories/desktop/architecturals.jpg',
      date: 'April 9th 2020',
      title: 'Architecturals',
      description: 'by Samantha Brooke',
    },
    {
      image: '/images/stories/desktop/world-tour.jpg',
      date: 'April 7th 2020',
      title: 'World Tour 2019',
      description: 'by Timothy Wagner',
    },
    {
      image: '/images/stories/desktop/unforeseen-corners.jpg',
      date: 'April 3rd 2020',
      title: 'Unforeseen Corners',
      description: 'by William Malcolm',
    },
    {
      image: '/images/stories/desktop/king-on-africa.jpg',
      date: 'March 29th 2020',
      title: 'King on Africa: Part II',
      description: 'by Tim Hillenburg',
    },
    {
      image: '/images/stories/desktop/trip-to-nowhere.jpg',
      date: 'March 21st 2020',
      title: 'The Trip to Nowhere',
      description: 'by Felicia Rourke',
    },
    {
      image: '/images/stories/desktop/rage-of-the-sea.jpg',
      date: 'March 19th 2020',
      title: 'Rage of The Sea',
      description: 'by Mohammed Abdul',
    },
    {
      image: '/images/stories/desktop/running-free.jpg',
      date: 'March 16th 2020',
      title: 'Running Free',
      description: 'by Michelle',
    },
    {
      image: '/images/stories/desktop/behind-the-waves.jpg',
      date: 'March 16th 2020',
      title: 'Running Free',
      description: 'by Michelle',
    },
    {
      image: '/images/stories/desktop/calm-waters.jpg',
      date: 'March 9th 2020',
      title: 'Calm Waters',
      description: 'by Samantha Brooke',
    },
    {
      image: '/images/stories/desktop/milky-way.jpg',
      date: 'March 5th 2020',
      title: 'The Milky Way',
      description: 'by Benjamin Cruz',
    },
    {
      image: '/images/stories/desktop/dark-forest.jpg',
      date: 'March 4th 2020',
      title: 'Night at The Dark Forest',
      description: 'by  Mohammed Abdul',
    },
    {
      image: '/images/stories/desktop/somwarpet.jpg',
      date: 'March 1st 2020',
      title: 'Somwarpet’s Beauty',
      description: 'by Michelle',
    },
    {
      image: '/images/stories/desktop/land-of-dreams.jpg',
      date: 'February 25th 2020',
      title: 'Land of Dreams',
      description: 'by William Malcolm',
    },
  ];
}
