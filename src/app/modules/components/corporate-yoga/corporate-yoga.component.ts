import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-corporate-yoga',
  templateUrl: './corporate-yoga.component.html',
  styleUrls: ['./corporate-yoga.component.scss']
})
export class CorporateYogaComponent implements OnInit {

  public bookingForm!: any;
  constructor(){

  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.bookingForm = new FormGroup({
      CompanyName: new FormControl(''),
      isd: new FormControl('+91'),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      mode: new FormControl('Offline'),
      name: new FormControl(''),
      add1: new FormControl(''),
      add2: new FormControl(''),
      message: new FormControl(''),
    });
  }

  yogaType:string=''

  updateForm(type:string){
   this.yogaType=type;
  }

  submit(){
    document.getElementById('close-modal')?.click()
  }
}
