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

    backgroundColor: any[] = [];
    hoverBackgroundColor: any[] = [];

    ngOnInit(): void {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      this.getBackgroundColor();
      this.getHoverBackgroundColor();
      console.log("this.backgroundColor", this.backgroundColor);  

      this.data = {
          labels: this.pieDataLabel,
          datasets: [
              {
                  data: this.pieData,
                  backgroundColor: this.backgroundColor, //[documentStyle.getPropertyValue('--mediumSeaGreen-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: this.hoverBackgroundColor // [documentStyle.getPropertyValue('--red-300'), documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--green-300')]
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

    private getBackgroundColor() {
      console.log(this.pieData.length);
      for(let i=0; i < 30; i++ ){
        let colorHexCode = this.getColorHexCode(i);
        this.backgroundColor.push(colorHexCode);
      }
    }

    private getHoverBackgroundColor() {
      for(let i=0; i < 30; i++){
        let colorHexCode = this.getColorHexCode(i);
        this.hoverBackgroundColor.push(colorHexCode);
      }
    }

    private getColorBasedNumber(index: number, bright: String): string {
      let color = this.getColorName(index);
      return '--' + color +'-' + bright;
    }

    private getColorName(index: number): string {
      
      const colorMap: string[] = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'pink',
        'brown',
        'gray',
        'black',
        'white',
        'gold',
        'silver',
        'beige',
        'ivory',
        'teal',
        'turquoise',
        'navy',
        'olive',
        'maroon',
        'magenta',
        'coral',
        'lavender',
        'khaki',
        'indigo',
        'fuchsia',
        'crimson',
        'chartreuse',
        'azure',
        'violet',
        'lime'
      ];
      return colorMap[index % colorMap.length];
    }

    private getColorHexCode(index: number): string {
      const colorMap: string[] = [
        '#FF4136',
        '#FF851B',
        '#FFDC00',
        '#2ECC40',
        '#0074D9',
        '#B10DC9',
        '#FF0080',
        '#A52A2A',
        '#AAAAAA',
        '#111111',
        '#FFFFFF',
        '#FFD700',
        '#C0C0C0',
        '#F5DEB3',
        '#FFFFF0',
        '#008080',
        '#40E0D0',
        '#000080',
        '#808000',
        '#800000',
        '#FF00FF',
        '#FF7F50',
        '#E6E6FA',
        '#F0E68C',
        '#4B0082',
        '#FF00FF',
        '#DC143C',
        '#7FFF00',
        '#F0FFFF',
        '#EE82EE',
        '#00FF00'
      ];
      return colorMap[index % colorMap.length];
    }
    
}
