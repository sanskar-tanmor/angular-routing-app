import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  fnameControl = FormControl;

  constructor() {
    // this.fnameControl = new FormControl("Knowledge"); //giving error need to work on reactive form 
  }

}
