import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  show: boolean = false;

  constructor(){  }

}
