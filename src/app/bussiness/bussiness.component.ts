import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {

  constructor(private api:NewsapiService,private titleService:Title) { }
// display
domNewsData:any =[];
  ngOnInit(): void {this.api.Pbuzznews().subscribe((result)=>{
    console.log(result);
    this.domNewsData=result.articles;
    this.titleService.setTitle("Bussiness At Glance");

})
  }

}
