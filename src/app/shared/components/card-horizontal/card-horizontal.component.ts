import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-horizontal.component.html',
  styleUrl: './card-horizontal.component.scss',
})
export class CardHorizontalComponent {
  @Input() data!: any;
}
