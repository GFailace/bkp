import { Component, OnInit } from '@angular/core';
import * as Highcharts from './highcharts.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html'
})

export class GraphComponent implements OnInit {
  ngOnInit() {
    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 250
      },
      title: {
        text: 'Situação dos Riscos'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Valor',
        colorByPoint: true,
        data: [{
          name: 'Em aberto ',
          y: 33.33,
          sliced: false,
          selected: false
        }, {
          name: 'Atrasados',
          y: 33.33,
          sliced: false,
          selected: false
        }, {
          name: 'Encerrados',
          y: 33.33,
          sliced: false,
          selected: false
        }]
      }]
    });
  }
}