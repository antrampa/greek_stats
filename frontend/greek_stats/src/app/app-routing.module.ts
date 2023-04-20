import { NgModule } from '@angular/core';
import { RouterModule, Routes, ParamMap  } from '@angular/router';
import { TourismComponent } from './tourism/tourism.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'tourism/:id', component: TourismComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
