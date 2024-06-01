import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-center',
  templateUrl: './yoga-center.component.html',
  styleUrls: ['./yoga-center.component.scss']
})
export class YogaCenterComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
