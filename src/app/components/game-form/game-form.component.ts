import { Component, OnInit , HostBinding} from '@angular/core';
import {Game} from '../../models/Game';
import {GamesService} from '../../services/games.service';
import { Redirect } from 'react-router-dom';
import {  Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
//@HostBinding('class') clases = 'row';

  game:Game= {
    id_Juego:0,
    Nombre_Juego:"",
    Imagen_Juego:"",
    Descripcion_Juego:"",
    Url_Juego:"",
    Categoria_Juego:"",
    id_Suscripcion:0,
  };

  edit : boolean = false;
  params = this.activatedroute.snapshot.params;
  constructor(private gamesService:GamesService , private router:Router ,private activatedroute :ActivatedRoute ) { }

  ngOnInit() {

    console.log(this.params['id']);
    if (this.params['id']){
        this.gamesService.getGame(Number(this.params['id'])).
        subscribe(
          (res:any) => {
            console.log(res[0]);
            this.game.Nombre_Juego = res[0].Nombre_Juego;
            this.game.Imagen_Juego = res[0].Imagen_Juego;
            this.game.Descripcion_Juego = res[0].Descripcion_Juego;
            this.game.Url_Juego = res[0].Url_Juego;
            this.game.Categoria_Juego = res[0].Categoria_Juego;
            this.game.id_Suscripcion=res[0].id_id_Suscripcion;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }
  Enviar(){
    delete this.game.id_Juego;
    this.gamesService.saveGame(this.game).subscribe(res=>{
      console.log(res);
    },
    err => console.error(err)
    )
    this.router.navigate(['games']);
  }

  UpdateGame(){
    delete this.game.id_Juego;
    console.log(this.game);
    console.log(Number(this.params['id']));
   this.gamesService.updateGame(Number(this.params['id']),this.game)
    .subscribe(
      res=>{
        console.log(res);
       this.router.navigate(['/games']);
      },
      err => console.error(err)
      )
  }

}
