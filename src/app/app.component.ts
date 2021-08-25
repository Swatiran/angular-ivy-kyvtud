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
  american: String = 'assets/amex.svg';
  // visa: String = '';

  dataList: any = [
    {
      id: 1,
      number: '4143520336522305',
      src: 'assets/mastercard.svg',
      month: '04',
      year: '2023',
      cvv: '123'
    },
    {
      id: 2,
      number: '5129236298535441',
      src: 'assets/visa.svg',
      month: '05',
      year: '2022',
      cvv: '456'
    }
  ];
  displayadd: any = 'none';
  displayrem: any = 'none';
  yearList: any = [];
  monthList: any = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ];
  cNum: String = '';
  cvv: String = '';
  mon: String = '';
  year: String = '';

  openModal(value) {
    if (value == 'add') {
      this.displayadd = 'block';
    } else if (value == 'rem') {
      this.displayrem = 'block';
    }
  }
  onCloseHandled() {
    this.displayadd = 'none';
    this.displayrem = 'none';
  }
  addCard() {
    this.dataList.push({
      id: this.dataList.length + 1,
      number: this.cNum,
      src: this.logo,
      month: this.mon,
      year: this.year,
      cvv: this.cvv
    });
    this.logo = '';
    this.cNum = '';
    this.mon = '';
    this.year = '';
    this.cvv = '';
  }
  index: any = '';
  removeCard() {
    console.log(this.index);
    this.dataList.forEach(element => {
      if (this.index == element.id) {
        const index = this.dataList.indexOf(this.index);
        this.dataList.splice(index, 1);
        this.index = '';
      }
    });
  }
  logo:any ='';
  changelogo() {
    let logo: any = '';
    if (this.cNum[0] == '4') {
      logo = this.visa;
    } else if (this.cNum[0] == '5') {
      logo = this.master;
    } else if (this.cNum[0] == '3') {
      logo = this.american;
    }
    this.logo = logo;
    let inp: any = document.getElementById('number');
    inp.style.background = 'white url(' + logo + ') right no-repeat';
    inp.style.paddingRight = '70px';
  }

  ngOnInit() {
    for (let i = 0; i < 15; i++) {
      this.yearList.push(this.thisYear);
      this.thisYear++;
    }
  }
}
