import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-tourism',
  templateUrl: './chart-tourism.component.html',
  styleUrls: ['./chart-tourism.component.scss']
})
export class ChartTourismComponent  implements OnInit {
    basicData: any;

    basicOptions: any;
    @Input() label: String = 'Δαπάνη';
    @Input() dataLabel: any[] = ['Q1', 'Q2', 'Q3', 'Q4'];
    @Input() data: any[] = [540, 325, 702, 620];

    ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
          labels: this.dataLabel,
          datasets: [
              {
                  label: this.label,
                  data: this.data,
                  backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  borderWidth: 1
              }
          ]
      };

      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }

}
