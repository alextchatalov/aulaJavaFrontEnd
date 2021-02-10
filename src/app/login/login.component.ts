import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private systemService: SystemService) { 
    this.formGroup = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.formGroup.value.username)
    console.warn(this.formGroup.value.password)
    const login = {
      username: '',
      password: ''
  }
    login.username = this.formGroup.value.username;
    login.password = this.formGroup.value.password;
    
    this.systemService.save(login).subscribe(data => {
      this.router.navigateByUrl('/redirectbb');
    });
  }
}
