import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared-component/page-header/page-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    PageHeaderComponent
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  pageTitle: string = "Currency Exchanger"
  constructor() { }

  ngOnInit() {
  }

}
