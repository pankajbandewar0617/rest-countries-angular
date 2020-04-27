import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private _dataService: DataService) {}
  // constructor() {}
  allData: any[];
  ngOnInit() {
    this._dataService.getAllData().subscribe((data) => {
      this.allData = data;
    });
  }
}
