import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingpipe'
})
export class SortingpipePipe implements PipeTransform {

  transform(value:any,args:any):any{
    debugger
    //console.log(value);
     if(args=='DateSort'){
    
      value.map((val:any) =>{
       return val.Crdate= new Date(val.Crdate)
      })
      console.log(value)
        value.sort((a:any,b:any) =>{
       return b.Crdate-a.Crdate;
      })
      value.map((a:any) =>{
        return a.Crdate = a.Crdate.toDateString();
       })
      console.log(value);
      return value 
    }  
    if(args=='CountSort'){
      value.sort((a:any,b:any) =>{
       return b.Count-a.Count;
      })
      console.log(value);
      return value
     }
     else return value
     
  }

}
