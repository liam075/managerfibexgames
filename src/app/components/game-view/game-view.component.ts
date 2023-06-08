import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/Game';
import {GamesService} from '../../services/games.service';
import {  Router,ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  @Pipe({
  name: 'safe'
})
  game:Game = {
    id_Juego:0,
    Nombre_Juego:"",
    Imagen_Juego:"",
    Descripcion_Juego:"",
    Url_Juego:"",
    Categoria_Juego:""
  }
  params = this.activatedroute.snapshot.params;
  constructor(private gamesService:GamesService , private router:Router ,private activatedroute :ActivatedRoute,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  const params = this.activatedroute.snapshot.params;
    console.log(this.params['id']);
    if (this.params['id']){
      this.gamesService.getGame(this.params['id']).
      subscribe(
        (res:any) => {
          console.log(res[0]);
          this.game.Nombre_Juego = res[0].Nombre_Juego;
          this.game.Imagen_Juego = res[0].Imagen_Juego;
          this.game.Descripcion_Juego = res[0].Descripcion_Juego;
          this.game.Url_Juego = res[0].Url_Juego;
          this.game.Categoria_Juego = res[0].Categoria_Juego;
          console.log(this.game);
        },
        err => console.error(err)
      )
    }
  }

  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
