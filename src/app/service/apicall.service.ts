import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../environment/evironment';


@Injectable({
  providedIn: 'root'
})
export class APIcallService {

  constructor(private http: HttpClient) { }

  getMovieBannerAPI():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/trending/all/week?api_key=${ApiUrl.apiKey}`)
  }

  getTrendingVideos():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/trending/movie/day?api_key=${ApiUrl.apiKey}`)
  }

  searchMoviesAPI(data:any):Observable<any> {
    return this.http.get(`${ApiUrl.baseUrl}/search/movie?api_key=${ApiUrl.apiKey}&query=${data.SearchMoives}`)
  }

  getMovieDetails(data:any):Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/movie/${data}?api_key=${ApiUrl.apiKey}`)
  }

  watchTrilar(data:any):Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/movie/${data}/videos?api_key=${ApiUrl.apiKey}`)
  }

  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/movie/${data}/credits?api_key=${ApiUrl.apiKey}`)
  }

  getActionMovies():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/discover/movie?api_key=${ApiUrl.apiKey}&with_genres=28`)
  }

  getAdventuremovies():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/discover/movie?api_key=${ApiUrl.apiKey}&with_genres=12`)
  }

  getaminationmovies():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/discover/movie?api_key=${ApiUrl.apiKey}&with_genres=16`)
  }

  getcomedymovies():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/discover/movie?api_key=${ApiUrl.apiKey}&with_genres=35`)
  }

  getdocumentarymovies():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/discover/movie?api_key=${ApiUrl.apiKey}&with_genres=99`)
  }

  getSicficmovies():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/discover/movie?api_key=${ApiUrl.apiKey}&with_genres=878`)
  }

  getThrillermovies():Observable<any>{
    return this.http.get(`${ApiUrl.baseUrl}/discover/movie?api_key=${ApiUrl.apiKey}&with_genres=53`)
  }

  
  
}