import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

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

  constructor(private userDataService: UserdataService) { }

  ngOnInit() {
    this.userName = this.userDataService.getUser();
    this.userDataService.getUsers().subscribe(res => {console.log(res); this.speeches = res.data})
    this.options = {
        chart: {
          type: 'lineChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 40,
            left: 55
          },
          x: function(d){ return d.x; },
          y: function(d){ return d.y; },
          useInteractiveGuideline: true,
          xAxis: {
            axisLabel: 'Time (ms)'
          },
          yAxis: {
            axisLabel: 'Articulate Metrics (am)',
            tickFormat: function(d){
              return d3.format('.02f')(d);
            },
            axisLabelDistance: -10
          }
        }
      };
    
      this.data = this.sinAndCos();
    }
    
    
    sinAndCos() {
      var sin = [], sin2 = [], cos = [], wpm = [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i < 100; i++) {
        wpm.push({x: i, y: i/8});
        sin.push({x: i, y: Math.sin(i/10)});
        sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
      }
    
      //Line chart data should be sent as an array of series objects.
      return [
        {
          values: wpm,      //values - represents the array of {x,y} data points
          key: 'WPM', //key  - the name of the series.
          color: '#ff7f0e',  //color - optional: choose your own line color.
          area: true
        },
        {
          values: cos,
          key: 'Filler Words',
          color: '#2ca02c',
          area: true
        },
        {
          values: sin2,
          key: 'Clarity',
          color: '#7777ff',
          area: true      //area - set to true if you want this line to turn into a filled area chart.
        }
      ];
    }
  }
