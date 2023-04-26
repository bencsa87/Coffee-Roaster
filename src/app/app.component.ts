import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLinkWithHref],
  standalone: true,
})
export class AppComponent {
  title = 'coffee-roaster';
  menu_open = false;

  constructor(private renderer: Renderer2){}

  toggleMenu(){
    if(this.menu_open){
      this.renderer.removeClass(document.body, 'menu-open');
      this.menu_open = false;
    } else{
      this.renderer.addClass(document.body, 'menu-open');
      this.menu_open = true;
    }
  }
}
