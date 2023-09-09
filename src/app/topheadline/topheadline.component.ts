import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:NewsapiService,private titleService:Title) { }
  // display
  topHeadLinesData:any =[];
  ngOnInit(): void {this.api.headLines().subscribe((result)=>{
      console.log(result);
      this.topHeadLinesData=result.articles;
      this.titleService.setTitle("NewsParody");

  })

}
}
