import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private systemService: SystemService) { 
    this.formGroup = this.formBuilder.group({
      username: '',
      password: '',
      password2: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.formGroup.value.username)
    console.warn(this.formGroup.value.password)
    const register = {
      username: '',
      password: '',
      password2: ''
    }
    register.username = this.formGroup.value.username;
    register.password = this.formGroup.value.password;
    register.password2 = this.formGroup.value.password2;

    this.systemService.register(register).subscribe(

      (response) => {                           //Next callback
        console.warn(response);
        alert(response.message);
        this.router.navigateByUrl('');
      },
      (error) => {                              //Error callback
        console.error('error caught in component');
        console.error(error);
        alert('Ocorreu um erro inesperado!')
      }
    );
  }

}
