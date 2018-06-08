import { Component, OnInit } from '@angular/core';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headline = 'Florian Tepelmann';
  subheadline = '';
  categoryHeadlines = ['Music', 'Programmed', 'About', 'Links'];
  categorySubheadlines = ['by Florian Tepelmann', 'by Florian Tepelmann', 'Florian Tepelmann', 'from Florian Tepelmann'];
  overview = false;
  detail = false;
  workData = [];
  catId: number;
  workId: number;
  work: {
      name: '';
      descriptions: [''];
  };

    constructor(private _worksService: WorksService) {
    }

  ngOnInit() {
      this._worksService.getWorks()
          .subscribe(resWorkData => this.workData = resWorkData.workData);
  }

    changeHeadline(catNum) {
        this.headline = this.categoryHeadlines[catNum];
        this.subheadline = this.categorySubheadlines[catNum];
        this.catId = catNum;
        this.overview = true;
        this.detail = false;
        console.log(this.catId);
    }

    showDetail(i) {
        this.overview = false;
        this.detail = true;
        this.workId = i;
        this.work = this.workData[this.catId].works[this.workId];
    }

    backHome() {
        this.overview = false;
        this.headline = 'Florian Tepelmann';
        this.subheadline = '';
    }

    backOverview(catNum) {
        this.headline = this.categoryHeadlines[catNum];
        this.subheadline = this.categorySubheadlines[catNum];
        this.catId = catNum;
        this.overview = true;
        this.detail = false;
    }

}
