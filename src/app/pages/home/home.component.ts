import { Component } from '@angular/core';
import { LineComponent } from '../../components/line/line.component';
import { SubscriptionComponent } from '../../sections/home/subscription/subscription.component';
import { ServicesComponent } from '../../sections/home/services/services.component';
import { AboutComponent } from '../about/about.component';
import { LandingComponent } from '../../sections/home/landing/landing.component';

@Component({
  selector: 'app-home',
  imports: [
    LineComponent,
    SubscriptionComponent,
    ServicesComponent,
    AboutComponent,
    LandingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
