import { Component, OnInit } from '@angular/core';
import { APIcallService } from '../service/apicall.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit{

  BannerResults: any =[]
  TrendingResult:any = []
  actionMovies:any = []
  adventuresmovies:any= []
  aminationsMovies:any  =[]
  comedymovies:any = []
  documentaryMoives:any =[]
  sicFicMov:any = []
  thriller:any = []

  ngOnInit(): void {
      this.getMovieBanner()
      this.getTrendingMovie()
      this.getActionMovie()
      this.getadventureMovie()
      this.getAminationMovie()
      this.getComedyMovies()
      this.getDocMovies()
      this.getSciFicovies()
      this.getThrillerMovies()
  }

  constructor(private movieService:APIcallService) { }

  getMovieBanner(){
    this.movieService.getMovieBannerAPI().subscribe({
      next: (response)=>{
        console.log (response, "banner")
        this.BannerResults = response.results
      }
    })
    
  }

  getTrendingMovie(){
    this.movieService.getTrendingVideos().subscribe({
      next:(result)=>{
        console.log (result)
        this.TrendingResult =  result.results
      }
    })
  }

  getActionMovie(){
    this.movieService.getActionMovies().subscribe({
      next:(result)=>{
        console.log (result, "action")
        this.actionMovies =  result.results
      }
    })
  }
  
  getadventureMovie(){
    this.movieService.getAdventuremovies().subscribe({
      next:(result)=>{
        console.log (result, "adventure")
        this.adventuresmovies =  result.results
      }
    })
  }
  
  getAminationMovie(){
    this.movieService.getaminationmovies().subscribe({
      next:(result)=>{
        console.log (result, "animation")
        this.aminationsMovies =  result.results
      }
    })
  }

  getComedyMovies(){
    this.movieService.getcomedymovies().subscribe({
      next:(result)=>{
        console.log (result, "comedy")
        this.comedymovies =  result.results
      }
    })
  }

  getDocMovies(){
    this.movieService.getdocumentarymovies().subscribe({
      next:(result)=>{
        console.log (result, "documetary")
        this.documentaryMoives =  result.results
      }
    })
  }

  getSciFicovies(){
    this.movieService.getSicficmovies().subscribe({
      next:(result)=>{
        console.log (result, "scific")
        this.sicFicMov =  result.results
      }
    })
  }

  getThrillerMovies(){
    this.movieService.getThrillermovies().subscribe({
      next:(result)=>{
        console.log (result, "Thiller")
        this.thriller =  result.results
      }
    })
  }


}
