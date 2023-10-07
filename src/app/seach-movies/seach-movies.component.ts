import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIcallService } from '../service/apicall.service';

@Component({
  selector: 'app-seach-movies',
  templateUrl: './seach-movies.component.html',
  styleUrls: ['./seach-movies.component.css']
})
export class SeachMoviesComponent implements OnInit{
  
  searchMoviesResult: any =[]
  constructor(private movieService:APIcallService){

  }

  ngOnInit(): void {
      
  }
  OnSubmit(form:NgForm){
    console.log(form.value.SearchMoives)
    this.movieService.searchMoviesAPI(form.value).subscribe({
      next: (response)=>{
        console.log (response)
        this.searchMoviesResult =  response.results
      }
    })
  }
}
