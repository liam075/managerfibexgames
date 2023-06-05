import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/games.service'
import {Game} from '../../models/Game'
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Pipe({
    name: 'safe'
  })
  games:any = []


  constructor(private gamesServices:GamesService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getgames();
  }

  getgames(){
    this.gamesServices.getGames().subscribe(
      res => {
        this.games = res;
        console.log(this.games);
      },
      err => console.error(err)

    );
  }

  deletegames(id_Juego:number){
    console.log("Eliminando juego "+id_Juego);
    /*this.gamesServices.deleteGame(id_Juego).subscribe(
      res => {
        console.log(res);
        this.getgames();
      },
      err => console.error(err)
    )*/
  }

  updategames(id_Juego:number){
      console.log("Actualizando juego "+id_Juego);
  }

  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
