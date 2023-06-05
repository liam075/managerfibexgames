import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Game } from '../models/Game'
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URL= 'http://localhost:3000'
  constructor(private http : HttpClient) { }


    getGames(){
      return this.http.get(`${this.API_URL}/games`);
    }

    getGame(id:number){
      return this.http.get(`${this.API_URL}/games/${id}`);
    }
    saveGame(game:Game){
      return this.http.post(`${this.API_URL}/games`,game);
    }
    deleteGame(id:number){
      return this.http.delete(`${this.API_URL}/games/${id}`);
    }
    updateGame(id:number|string,game:Game){
      return this.http.put(`${this.API_URL}/games/${id}`,game);
    }

}
