import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { PhotoListResolver } from './photos/photos-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'user/:userName',
    component: PhotosListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add',
    component: PhotosFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
