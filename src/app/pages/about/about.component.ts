import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  imports: [CardComponent, SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
