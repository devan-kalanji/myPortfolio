import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects= {} as Project[];

  isCollapsed: boolean = true;
  angular: boolean = false;
  html: boolean = false;
  css: boolean = false;
  filtering: boolean = false;

  constructor(private projectService : ProjectsService){
  }

  ngOnInit(): void{
    this.projects = this.projectService.getProjects();
  }

  Filter(){
    let filterTags: Tag[]=[];

    if(this.angular){
      filterTags.push(Tag.Angular);
    }

    if(this.html){
      filterTags.push(Tag.HTML)
    }

    if(this.css){
      filterTags.push(Tag.CSS)
    }

    if(this.angular || this.html || this.css){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  resetFilter(){
    this.filtering = false;
    this.angular = false;
    this.html = false;
    this.css = false;

    this.projects = this.projectService.getProjects();
  }

}
