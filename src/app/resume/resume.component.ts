import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  constructor(private render: Renderer2){

  }

  downloadFile(){
    const link = this.render.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/KalangiamResume.pdf');
    link.setAttribute('download','KalangiamResume.pdf');
    link.click();
    link.Remove();
  }
}
