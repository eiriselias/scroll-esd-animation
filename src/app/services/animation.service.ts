import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }
  
  public loadScript(){
    console.log("loading to scripts");
    let node = document.createElement("script");
    node.src = "assets/js/animations.js";
    node.type = "text/javascripts";
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
