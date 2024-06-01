import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-yoga',
  templateUrl: './corporate-yoga.component.html',
  styleUrls: ['./corporate-yoga.component.scss']
})
export class CorporateYogaComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
