import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  menuItems = [
    {label: 'Home', routerLink: ['/']},
    {label: 'About', routerLink: ['/about']},
    {label: 'Contact', routerLink: ['/contact']}
  ];
}
