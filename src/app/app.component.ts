import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
    this.thisYear = new Date().getFullYear();
  }

  thisYear: any;
  visa: String = 'assets/visa.svg';
  master: String = 'assets/mastercard.svg';
  american: String = '';
  // visa: String = '';

  dataList: any = [
    {
      number: '4143520336522305',
      src: 'assets/mastercard.svg',
      month: '',
      year: '',
      cvv: ''
    },
    {
      number: '5129236298535441',
      src: 'assets/visa.svg',
      month: '',
      year: '',
      cvv: ''
    }
  ];
  display: any = 'none';
  yearList:any = [];
  monthList:any = ['01','02','03','04','05','06','07','08','09','10','11','12']

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  addCard() {}

  ngOnInit() {
    for(let i=0;i<15;i++) {
      this.yearList.push(this.thisYear);
      this.thisYear++;
    }
  }
}
