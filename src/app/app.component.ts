import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HackIdeaService } from './hack-idea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='name'
  Title:any;
  Description:any;
  Tags:any;
  Crdate:any;
  projects:any;
  valuelength =null;

 @ViewChild('closebutton') closebutton:any;

optionalgroup=[{
  Title:'',
  Description:'',
  Tags:'',
  Crdate:''

}]

constructor(private _hackideaservices: HackIdeaService ) { 

}


ngOnInit() {
  debugger
 
  this.getdata();

}
getdata()
{
  this._hackideaservices.jsondata().subscribe((data1)=>{
    debugger
    this.projects = data1;
    console.log(this.projects);
  });
}
   Popupmodel(index:any,group:any)
  {
    debugger
    this.closebutton.nativeElement.click();
    //console.log(value);
    //this.projects=[];
    let  values ={'Title':group.Title,'Description':group.Description,'Tags':group.Tags,'Crdate':group.Crdate}
    //const datavalue = JSON.parse(values)
   // this.projects.push(values)
    this._hackideaservices.addTask(values).subscribe((data)=>{
      debugger
     console.log(data);    
     this.getdata();
     }); 
     
  }
}
