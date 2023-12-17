import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() filteredCards: any[] = [];

}
