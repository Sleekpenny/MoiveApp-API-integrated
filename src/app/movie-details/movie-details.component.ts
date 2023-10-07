import { Component, OnInit} from '@angular/core';
import { APIcallService } from '../service/apicall.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movieDetails:any; 
  movieTrailer:any;
  movieCast: any =[]

  constructor(private service:APIcallService, private router:ActivatedRoute){}
  ngOnInit(): void {
    let paramsID  = this.router.snapshot.paramMap.get("id");
    this.getMovies(paramsID)
    this.watchMovieSnippt(paramsID)
    this.getMovieCastt(paramsID)
  }

  getMovies(id:any){
    this.service.getMovieDetails(id).subscribe({
      next: (response)=>{
        console.log (response, "movieDetails")
        this.movieDetails = response
      }
    })
  }

  watchMovieSnippt(id:any){
    this.service.watchTrilar(id).subscribe({
      next: (response)=>{
        response.results.forEach((element:any) => {
          if (element.type == "Trailer"){
            this.movieTrailer = element
            console.log (element)
          }
        });        
      }
    })
  }

  getMovieCastt(id:any){
    this.service.getMovieCast(id).subscribe({
      next: (response)=>{
        this.movieCast = response.cast 
        console.log(response , "movieCast")
      }
    })
  }

}
