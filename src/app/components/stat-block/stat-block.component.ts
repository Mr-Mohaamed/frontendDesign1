import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
})
export class StatBlockComponent {
  @Input() number: number = 0;
  @Input() labelLine1: string = '';
  @Input() labelLine2: string = '';
}
