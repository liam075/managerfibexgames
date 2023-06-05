import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameFormComponent} from './components/game-form/game-form.component';
import {GameViewComponent} from './components/game-view/game-view.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/games',
    pathMatch:'full'
  },
  {
    path: 'games',
    component:GameListComponent
  },
  {
    path:'games/add',
    component:GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component:GameFormComponent
  },
  {
    path:'games/view/:id',
    component:GameViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
