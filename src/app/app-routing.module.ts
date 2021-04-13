import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LivroComponent } from './livro/livro.component';

const routes: Routes = [{path: '', component: LoginComponent },
                        {path: 'register', component: RegisterComponent },
                        {path: 'home', component: HomeComponent },
                        {path: 'usuarios', component: UsuariosComponent},
                        {path: 'livros', component: LivroComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
