import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';
import { SystemService } from '../system.service'
import { DataSource } from '@angular/cdk/collections';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioLogado } from '../model/usuarioLogado';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  livros: Observable<Livro[]>
  dataSource = new UserDataSource(this.systemService);
  displayedColumns = ['titulo', 'paginas', 'autor', 'reservado', 'acoes'];
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private systemService: SystemService, public dialog: MatDialog) {
    this.formGroup = this.formBuilder.group({
      titulo: '',
      paginas: '',
      autor: '',
      usuario: ''

    });
   }
  ngOnInit(): void {
  }

  animal: string;
  name: string;

  novo() {

    const livro = {
      titulo: '',
      paginas: '',
      autor: ''
    }

    livro.titulo = this.formGroup.value.titulo;
    livro.paginas = this.formGroup.value.paginas;
    livro.autor = this.formGroup.value.autor;

    this.systemService.salvarLivro(livro).subscribe(

      (response) => {                           //Next callback
        console.warn(response);
        this.dataSource = new UserDataSource(this.systemService);
        this.formGroup = this.formBuilder.group({
          titulo: '',
          paginas: '',
          autor: ''
        });
      },
      (error) => {                              //Error callback
        console.error('error caught in component');
        console.error(error);
        alert('Ocorreu um erro inesperado!')
      }
    );
  }

  reservar(titulo) {
    const reserva = {
      titulo: titulo,
      usuario: UsuarioLogado.nome
    }

    this.systemService.reservar(reserva).subscribe(

      (response) => {                           //Next callback
        console.warn(response);
        this.dataSource = new UserDataSource(this.systemService);
      },
      (error) => {                              //Error callback
        console.error('error caught in component');
        console.error(error);
        alert('Ocorreu um erro inesperado!')
      }
    );
  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private systemService: SystemService) {
    super();
  }
  connect(): Observable<Livro[]> {
    return this.systemService.getLivros();
  }
  disconnect() {}

}
