import { Component,OnInit } from '@angular/core';

import { UserProfile } from './service/userprofile.service'
import { data } from './assets/people'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  private pplData : any;
  private pplName : any = [];
  private userName : any = "Shiv Prakash"

  private isEnable :boolean = false;
  
  private description : any;
  private rating : any;
  private image : any;
  private likes : any = [];
  private dislikes : any =[];

  //private searchText : any ="";

  constructor(private userprofile : UserProfile){

  }

  ngOnInit(){
    this.pplData=data.People;
    this.pplData.forEach(element => {
      this.pplName.push(element.name);
    });
    console.log(this.pplData);
        this.description = this.pplData[0].Description;
        this.image = this.pplData[0].img;
        this.rating = this.pplData[0].rating;
        this.likes = this.pplData[0].Likes;
        this.dislikes = this.pplData[0].Dislikes;
        this.isEnable = true;
    // this.userprofile.getPeopleData()
    //   .subscribe((result)=>{
    //     this.pplData = result;
    //     console.log(this.pplData);
    //   })
  }

  public getPplData(event){
    var name = event.target.innerHTML.trim();
    for(let i=0;i<this.pplData.length;i++){
      if(name == this.pplData[i].name){

        this.description = this.pplData[i].Description;
        this.image = this.pplData[i].img;
        this.rating = this.pplData[i].rating;
        this.likes = this.pplData[i].Likes;
        this.dislikes = this.pplData[i].Dislikes;
        //this.image = this.pplData[i].img;

        this.isEnable = true;
      }
    }
  }
  
}
