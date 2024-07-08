import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
  {
    id: 0,
    name: "Myself-Portfolio",
    tags: [Tag.Angular, Tag.CSS],
    summary: '',
    description: '',
    projectLink: '',
    pictures: ["../../assets/kalanjiPic.jpeg"]
  },
  {
    id: 1,
    name: "Room Rent Service",
    tags: [Tag.HTML, Tag.CSS],
    summary: '',
    description: '',
    projectLink: '',
    pictures: ["../../assets/image.png"]
  },
  ]


  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: number){
    let project = this.projects.find(x=>x.id == id);
     if(project == undefined){
      throw new TypeError("There is no project matching the id "+id);
     }
     return project;
  }

  getProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];
    this.projects.forEach(function(project){
      let foundAll = true;
       filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        }
       });
       if(foundAll){
        filteredProjects.push(project);
       }
    });
    return filteredProjects;
  }
}
