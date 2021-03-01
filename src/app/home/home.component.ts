import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service'
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';



export interface PeriodicElement {
  position: number;
  username: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, username: 'Alex', password: '147'},
  {position: 2, username: 'Helium', password: 'ew333'},
  {position: 3, username: 'Lithium', password: 'ew333'},
  {position: 4, username: 'Beryllium', password: 'ew333'},
  {position: 5, username: 'Boron', password: 'ew333'},
  {position: 6, username: 'Carbon', password: 'ew333'},
  {position: 7, username: 'Nitrogen', password: 'ew333'},
  {position: 8, username: 'Oxygen', password: 'ew333'},
  {position: 9, username: 'Fluorine', password: 'ew333'},
  {position: 10,username: 'Neon', password: 'ew333'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'username', 'password'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
  constructor() {

   }
}

