import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddArray:number[]=[];
  evenArray:number[]=[];
  onIntervaelFired(number:number){
   if(number % 2  === 0){
     this.evenArray.push(number);
   }
   else{
    this.oddArray.push(number);
  }
}

}
