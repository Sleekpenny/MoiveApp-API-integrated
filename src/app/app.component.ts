import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ""
  ngNav: any

  @HostListener("document:scroll") scrollOver(){
    console.log (document.body.scrollTop, "Scrolllength#")

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.ngNav = {
        'background-color' : 'white ',
        'width' : '100%',
        'margin' : "auto",
        'box-shadow' : '0 0 0 1 ',
       
      } 
    } else{
      this.ngNav = {}
    }
  }
}
