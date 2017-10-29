import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  options;
  data;
  chartType;
  userName: String;
  speeches: any;
  // lineChart
  public lineChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 10, 20, 30, 22], label: 'WPM'},
    {data: [28, 48, 40, 19, 86, 27, 90, 20, 30, 40, 44], label: 'Filler Words'}
  ];
  public lineChartLabels:Array<any> = ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s'];
  public lineChartType:string = 'line';
  public lineChartLegend:boolean = true;
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor(private userDataService: UserdataService) { }

  ngOnInit() {
    this.userName = this.userDataService.getUser();
    this.userDataService.getUsers().subscribe(res => {console.log(res); this.speeches = res.data})

  }

}
