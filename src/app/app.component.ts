import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aulaJavaFrontEnd';
  constructor(private router: Router) {

  }
  usuarios() {
    this.router.navigateByUrl('/usuarios');
   }

   livros() {
    this.router.navigateByUrl('/livros');
   }

   home() {
    this.router.navigateByUrl('/home');
   }
}
