import { Component, OnInit } from '@angular/core';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  works = [];
  constructor(private _worksService: WorksService) {}

  ngOnInit() {
      this._worksService.getWorks().subscribe(resWorkData => this.works = resWorkData.works);
  }

}
