import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css',
})
export class SectionHeaderComponent {
  @Input() titlePartOne: string = '';
  @Input() titlePartTwo: string = '';
}
