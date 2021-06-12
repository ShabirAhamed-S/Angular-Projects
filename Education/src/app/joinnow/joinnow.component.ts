import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {ServiceService} from '../service.service'

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  formGroup: any;
  constructor(private authService: ServiceService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  loginForm(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(res=>{
        if(res.success){
          console.log(res)
          alert(res.message)
        }
        else{
          alert(res.message)
        }
      },
      err => console.log(err))
    }
  }

}
