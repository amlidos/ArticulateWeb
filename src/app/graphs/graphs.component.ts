import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { ChartsModule } from 'ng2-charts';
import { ViewChild } from '@angular/core';
import { BaseChartDirective }   from 'ng2-charts/ng2-charts';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  userName: String;
  speeches: any;
  recordings: any;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  
  // lineChart
  public lineChartData: Array<any> = [
    {
        data: [],
        label: '',
    }
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
  constructor(private userDataService: UserdataService) { 
    this.userDataService.getSpeeches().subscribe(res => {console.log(res); this.speeches = res.data})    

    this.userDataService.getRecordings().subscribe(res => {console.log(res); this.recordings = res.data[0];
      let wordsDoneData: DataObj = {data: [], label: "Words Done"};
      console.log(this.recordings);
      for(let i = 0; i < this.recordings.data.length; ++i) {
        console.log(+this.recordings.data[i].wordsDone);
        wordsDoneData.data.push(+this.recordings.data[i].wordsDone);
      }
      this.lineChartData[0] =wordsDoneData;    
      console.log(this.lineChartData);
      this.chart.ngOnChanges({} as SimpleChanges);
      // this.chart.chart.update();
    });
  }

  ngOnInit() {
    // this.chart.chart.update();
    this.userName = this.userDataService.getUser();
  }

}

interface DataObj {
  data: Array<any>;
  label: String;
}
