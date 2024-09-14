import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guia2Cristian';
  titulo = 'PERRONA';
  avatar= 'https://images.vexels.com/media/users/3/227565/isolated/preview/f77e3012e7b4ee1436dd818c420acafe-logotipo-frontal-de-shephard-alem-n.png';
  video = '';
  link1 = 'https://www.youtube.com/watch?v=itVGgPBxkQo' ;
  link2 = 'https://www.suzuki.com.co/motocicletas';
  link3 = 'https://colorhunt.co/';
  
  inventario ={
    nombrep1:'Gato',
    precio1: 100.000,
    cantidad1: 100,
    nombrep2:'Perro',
    precio2: 80.000,
    cantidad2: 20,
    nombrep3:'Ratones',
    precio3: 200.000,
    cantidad3: 50,
  }
}
