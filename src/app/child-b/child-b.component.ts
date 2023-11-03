import { Component } from '@angular/core';
import { Logger } from '../service/logger.service';


@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent {

  count = 0;
  currentDate = '';
  currentTime = '';
  myName: string = '';

  
  constructor(private logger: Logger) { } //service called from logger.service.ts

  ngOnInit(): void{ /// this is required
    this.logger.writeCount(this.count);
    this.count++;

    this.currentDate = this.logger.getTime().toLocaleDateString();
    this.currentTime = this.logger.getTime().toLocaleTimeString();
    this.myName = this.logger.getName();
  }

}
