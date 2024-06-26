import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private route:Router){ }

  navigate(arg0: string) {
    this.route.navigate([arg0],{skipLocationChange:true})
    }

}
