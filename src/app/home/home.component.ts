import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(private titleService: Title,private render: Renderer2){
  this.titleService.setTitle('Kalangi - Home')
 }

 
}
