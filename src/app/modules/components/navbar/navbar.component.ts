import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private route:Router){ }
  
navigate(arg0: string) {
this.route.navigate([arg0],{skipLocationChange:true})
}

}
