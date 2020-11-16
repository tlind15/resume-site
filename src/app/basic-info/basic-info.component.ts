import { Component, OnInit } from '@angular/core';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  faLinkedInIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }

}
