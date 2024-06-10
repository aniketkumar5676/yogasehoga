import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view-service',
  templateUrl: './home-view-service.component.html',
  styleUrls: ['./home-view-service.component.scss']
})
export class HomeViewServiceComponent {

 
  constructor(private route:Router){ }

  navigate(arg0: string) {
    this.route.navigate([arg0],{skipLocationChange:true})
    }


    public contactForm!: any;
    public bookingForm!: any;

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.contactForm = new FormGroup({
        name: new FormControl(''),
        isd: new FormControl('+91'),
        phoneNumber: new FormControl(''),
        email: new FormControl(''),
        add1: new FormControl(''),
        add2: new FormControl(''),
        message: new FormControl(''),
      });

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
      
    }
    submitYogaCamp(){
      
    }
}
