import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

  @Input() product:any;

  constructor() { }

  ngOnInit(): void {
  }

  clickme()
  {
    window.alert( "Course videos are available in your location to purchase");
  }

}
