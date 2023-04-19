import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    data: any;

    options: any;

    @Input() title: string = '';
    @Input() label: string = '';
    @Input() pieDataLabel: any[] = [];//['A', 'B', 'C'];
    @Input() pieData: any[] = [];//[540, 325, 702];

    ngOnInit(): void {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: this.pieDataLabel,
          datasets: [
              {
                  data: this.pieData,
                  backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };
    }
}
