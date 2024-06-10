import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-yoga-center',
  templateUrl: './yoga-center.component.html',
  styleUrls: ['./yoga-center.component.scss']
})
export class YogaCenterComponent implements OnInit {

  @ViewChild('closeModal') closeModal!: ElementRef
  public bookingForm!: any;
  constructor(){

  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.bookingForm = new FormGroup({
      name: new FormControl(''),
      isd: new FormControl('+91'),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
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

