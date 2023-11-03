import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  itemImageUrl = "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg";

  customers = [
    {"name": "customer1", "id": "c0001", "location": "pune"},
    {"name": "customer2", "id": "c0002", "location": "mumbai"},
    {"name": "customer3", "id": "c0003", "location": "noida"},
    {"name": "customer4", "id": "c0004", "location": "london"},
  ]
  // isUnchanged = false;
  btnColor = "btn-red";
  bgColor = "blue";
  cname = "Tanmor";
  myname = "Sanskar Tanmor";

  //let isShow: boolean =true; //  Inside a class, TypeScript doesn't permit the declaration of class members with
  isShow: boolean =false; // use this

  nameChange() {
    console.log("name chnaged to:==", this.myname);
  }
  toggleMessage() {
     // this.isUnchanged = !this.isUnchanged;
     this.btnColor === "btn-red" ?  this.btnColor= "btn-green" :  this.btnColor = "btn-red";
     this.bgColor === "blue" ?  this.bgColor= "black" :  this.bgColor = "blue";
  }
  
  textChanged() {
    console.log("== new name is===>>", this.cname);
  }

  ngOnInit(): void {
    this.cname = "Sanskar";
    console.log("=====>>", this.cname);
  }
}
