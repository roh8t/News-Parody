import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css']
})
export class DomesticComponent implements OnInit {

  constructor(private api:NewsapiService ,private titleService:Title) { }
  // display
  techDomData:any =[];
  ngOnInit(): void {this.api.Pdomnews().subscribe((result)=>{
    console.log(result);
    this.techDomData=result.articles;
    this.titleService.setTitle("India Today");

})
  }

}
