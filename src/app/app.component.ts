import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  n1:number;
  n2:number;
  r:number;
  ngOnit()
  {
    this.n1=0;
    this.n2=0;
  }
  add(n1:number,n2:number)
  {
    this.r=n1+n2;
    console.log(this.r) ;
  }
  sub(n1:number,n2:number)
  {
    this.r=n1-n2;
    console.log(this.r);
    
  }
  mul(n1:number,n2:number)
  {
    this.r=n1*n2;
    console.log(this.r);
    
  }
  div(n1:number,n2:number)
  {
    this.r=n1/n2;
    console.log(this.r);
  }
  pow(n1:number,n2:number)
  {
    this.r=n1**n2;
    console.log(this.r);
    
  }
}