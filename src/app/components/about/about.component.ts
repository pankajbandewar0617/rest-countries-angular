import { Component, OnInit } from '@angular/core';
import { DataService } from '../home/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
  detail: any;

  ngOnInit() {
    let name = this.route.snapshot.params.name;
    console.log(name);

    this.dataService.getDetail(name).subscribe((data: []) => {
      console.log(typeof data);

      this.detail = data;
      console.log(name, this.detail);
    });
  }

  goto(prop: string) {
    console.log(prop);
    this.dataService.getDetail(prop).subscribe((data: []) => {
      this.detail = data;
      console.log(prop, this.detail);
    });
    // this.sorterService.sort(this.filteredCustomers, prop);
  }
}
