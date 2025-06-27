import { Component } from '@angular/core';
import { StatBlockComponent } from '../../../components/stat-block/stat-block.component';

@Component({
  selector: 'app-landing',
  imports: [StatBlockComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
