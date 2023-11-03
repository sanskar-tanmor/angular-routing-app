import { Component } from '@angular/core';  /// to get data from parent
import { HttpClient } from '@angular/common/http'; // for api

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  

  startDate = new Date(2005, 0, 1);

  constructor(private http : HttpClient){
     
  }

  data: any;
  dataList: any = [];

  playlist = {
    "name": "sanskar",
    "numberOfSongs": 10,
    "rating": '3'
  }
  ngOnInit(): void {

    this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    .subscribe(response => {
      this.data = response;
      this.dataList = this.data.list;
    //   this.dataList = 
    //   [
    //     {
    //         "name": "Billy Lee",
    //         "position": "Web Developer",
    //         "office": "Detroit",
    //         "salary": 50000,
    //         "edit": "Edit",
    //         "delete": "Delete"
    //     },
    //     {
    //         "name": "John Doe",
    //         "position": "Manager",
    //         "office": "Troy",
    //         "salary": 90000,
    //         "edit": "Edit",
    //         "delete": "Delete"
    //     },
    //     {
    //         "name": "James Baxter",
    //         "position": "IT Support",
    //         "office": "Detroit",
    //         "salary": 30000,
    //         "edit": "Edit",
    //         "delete": "Delete"
    //     },
    //     {
    //         "name": "Jimmy Lee",
    //         "position": "Web Developer",
    //         "office": "Detroit",
    //         "salary": 50000,
    //         "edit": "Edit",
    //         "delete": "Delete"
    //     },
    //     {
    //         "name": "Nick Wess",
    //         "position": "Sales",
    //         "office": "Ann Arbor",
    //         "salary": 40000,
    //         "edit": "Edit",
    //         "delete": "Delete"
    //     },
    //     {
    //         "name": "Sarah Deets",
    //         "position": "Graphic Designer",
    //         "office": "Ann Arbor",
    //         "salary": 40000,
    //         "edit": "Edit",
    //         "delete": "Delete"
    //     }
    // ]
      console.log("data is====", this.dataList);
    });

  }
}
