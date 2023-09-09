import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:NewsapiService,private titleService:Title) { }
   // display
  techNewsData:any =[];
  ngOnInit(): void {this.api.Ptechnews().subscribe((result)=>{
    console.log(result);
    this.techNewsData=result.articles;
    this.titleService.setTitle("Tech News");

})
  }

}
