import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';
import { SystemService } from '../system.service'
import {DataSource} from '@angular/cdk/collections';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  livros: Observable<Livro[]>
  dataSource = new UserDataSource(this.systemService);
  displayedColumns = ['titulo', 'paginas', 'autor'];
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private systemService: SystemService) {
    this.formGroup = this.formBuilder.group({
      titulo: '',
      paginas: '',
      autor: ''
    });
   }
  ngOnInit(): void {
  }

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
        alert(response.message);
        this.dataSource.connect();
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
