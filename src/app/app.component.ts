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
  isClicked = false;
  Count:any;
  Sorting='pranav';
 @ViewChild('closebutton') closebutton:any;
  empId='';

optionalgroup=[{
  Title:'',
  Description:'',
  Tags:'',
  Crdate:''

}]
dropdownvalue =[{"name":"Lifestyle"},{"name":"Technology"},{"name":"Productivity"},{"name":"Simulation"},{"name":"Tools"}]
  submitted: boolean = false;
  requiredmsg: any;

constructor(private _hackideaservices: HackIdeaService ) { 

}

selectChangeHandler(event:any,row:any){
  debugger
  row.Tags =event.target.value
  console.log(event.target.value)
}

ngOnInit() {
  this.getdata();
}
  promptbox(){
   let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    let text = "User cancelled the prompt.";
    console.log(text)
  } else {
    this.empId = person ;
    console.log(this.empId)
  }
}
getdata()
{
  this._hackideaservices.jsondata().subscribe((data1)=>{
    debugger
    this.projects = data1;
    console.log(this.projects);
  });
}
postdata(values:any){
  this._hackideaservices.addTask(values).subscribe((data)=>{
    //debugger
   console.log(data);    
   this.getdata();
   }); 
}
updatedata(id:number,values:any){
  this._hackideaservices.UpdateTask(id,values).subscribe((data2)=>{
    console.log(data2);
    this.getdata();
  });
}
upVote(value:any)
{
  debugger

  if(this.empId =='')
  {
    this.promptbox()
  }

  //this.isClicked=true;
  value.Count= value.Count+1;

  let UpvoteValue ={'Title':value.Title,'Description':value.Description,'Tags':value.Tags,'Crdate':value.Crdate,'Count':value.Count}
  this.updatedata(value.id,UpvoteValue);
    
  //let upvoteVal ={'Count':value.Count}
  //this.postdata(upvoteVal);
}
DateSort(){
  this.Sorting ='DateSort'
}
UpvoteSort(){
  this.Sorting ='CountSort'
}

CloseButton()
{
  debugger
  this.optionalgroup=[{
    Title:'',
    Description:'',
    Tags:'',
    Crdate:''
  }]
}

modelopen()
{
  if(this.empId =='')
  {
    this.promptbox()
  }
}
   Popupmodel(index:any,group:any)
  {
    debugger

    if(this.empId =='')
  {
    this.promptbox()
  }
    this.submitted = true;

    if(group.Title==''|| group.Description =='' || group.Tags=='' || group.Crdate=='')
    {
      this.requiredmsg = "Required Field*"
    }
   
    else {
    //console.log(value);
    //this.projects=[];
    let  values ={'Title':group.Title,'Description':group.Description,'Tags':group.Tags,'Crdate':group.Crdate,'Count':0}
    //const datavalue = JSON.parse(values)
   // this.projects.push(values)
    this.postdata(values) 

    this.optionalgroup=[{
                          Title:'',
                          Description:'',
                          Tags:'',
                          Crdate:''
                        }]
    this.closebutton.nativeElement.click(); 
    
  }
    //this.optionalgroup=[]
  }
}
