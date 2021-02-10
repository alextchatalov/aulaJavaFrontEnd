import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    
  
    this.systemService.save().subscribe(data => {
      console.warn(data);
      this.router.navigateByUrl('/redirectbb');
    });
  }
}
