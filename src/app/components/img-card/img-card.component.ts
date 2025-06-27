import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  imports: [],
  templateUrl: './img-card.component.html',
  styleUrl: './img-card.component.css',
})
export class ImgCardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
}
