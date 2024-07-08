import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private render: Renderer2){}

  playSound(){
    let audio = new Audio();
    audio.src = "../../assets/KalanjiNameAudio.ogg";
    audio.load();
    audio.play();
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
