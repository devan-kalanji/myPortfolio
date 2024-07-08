import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ViewMoreComponent } from './view-more/view-more.component';

const routes: Routes = [
  {path:' ', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'resume', component:ResumeComponent},
  {path:'contact', component:ContactComponent},
  {path:'view-more', component:ViewMoreComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
