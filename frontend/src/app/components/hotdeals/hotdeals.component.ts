import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.scss']
})
export class HotdealsComponent implements OnInit {

  constructor() { }

  slides = [
    { img: "/assets/img/c2.JPG" },
    { img: "/assets/img/c3.JPG" },
    { img: "/assets/img/cr1.JPG" },
    // {img: "/assets/img/c2.JPG"}}
  ];

  ngOnInit(): void {
  }

}
