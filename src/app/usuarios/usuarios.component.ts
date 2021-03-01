import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { SystemService } from '../system.service'
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Observable<Usuario[]>
  dataSource = new UserDataSource(this.systemService);
  displayedColumns = ['username', 'password'];
  constructor(private systemService: SystemService) { }
  ngOnInit(): void {
  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private systemService: SystemService) {
    super();
  }
  connect(): Observable<Usuario[]> {
    return this.systemService.getUsuarios();
  }
  disconnect() {}
}
