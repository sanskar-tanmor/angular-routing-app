import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent {

  // colorArray = [
  //   'Blue','Green','Yellow','Orange','Red','Pink','Purple','Maroon','Gray'
  // ]

  constructor(@Inject(DOCUMENT) private document: Document) {}

  selectColor = (color_code:string, color_name:string) => {
    // alert('You selected ' + color_code + ' which is ' + color_name + ' color theme');

    const head = this.document.getElementsByTagName('head')[0];
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = `assets/${color_name}`;

      head.appendChild(style);
    }

    ngOnInit() {
      
    }

}
