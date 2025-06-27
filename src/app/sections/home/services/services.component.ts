import { Component } from '@angular/core';
import { ImgCardComponent } from '../../../components/img-card/img-card.component';
import { SectionHeaderComponent } from '../../../components/section-header/section-header.component';

@Component({
  selector: 'app-services',
  imports: [ImgCardComponent, SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
