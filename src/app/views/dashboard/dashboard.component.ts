import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Products } from '../../services/products';
import { PricesService } from '../../services/prices.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  radioModel: string = 'Month';
  _categorylist: Products[];

  constructor(private _service: PricesService) {}

  // mainChart

  public mainChartElements = 7;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];
  public mainChartData4: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'අලවර්ග',
      lineTension: 0
    },
    {
      data: this.mainChartData2,
      label: 'එළවළු',
      lineTension: 0
    },
    {
      data: this.mainChartData3,
      label: 'පළතුරු',
      lineTension: 0
    },
    {
      data: this.mainChartData4,
      label: 'ධාන්‍යය',
      lineTension: 0
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['28 Dec', '29 Dec', '30 Dec', '31 Dec', '01 Jan', '02 Jan', '03 Jan'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(200 / 4),
          max: 200
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--warning'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public getLastWeek(): Array<any> {

    const ourDate = new Date();
    const myweek: Array<any> = [];

    for (let i = 0; i <= 6; i++) {
      const full = new Date(ourDate.setDate(ourDate.getDate() - 1));
      const day = full.getDay();
      const month = full.getMonth();
      const yr = full.getFullYear();
      const compl = `${day}/${month}/${yr}`;
      myweek.push(day);
    }
    return myweek;
  }

  ngOnInit(): void {

    this._service.getCategoriesFromRemote().subscribe(
      data => {
        console.log('Response Recieved: Category');
        this._categorylist = data;
        console.log('array', this._categorylist);
      },
      error => console.log('Error Occured: Category')
    );

    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 150));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(this.random(65, 110));
      this.mainChartData4.push(this.random(30, 140));
    }
    console.log('Week', this.getLastWeek());
  }
}
