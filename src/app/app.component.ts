import { Component } from '@angular/core';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scroll-esd-animation';

  constructor(private animationServe: AnimationService){
    this.animationServe.loadScript();
  }
  
}
