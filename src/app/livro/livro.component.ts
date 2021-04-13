import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';
import { SystemService } from '../system.service'
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  usuarios: Observable<Livro[]>
  dataSource = new UserDataSource(this.systemService);
  displayedColumns = ['titulo', 'paginas', 'autor'];
  constructor(private systemService: SystemService) { }
  ngOnInit(): void {
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
