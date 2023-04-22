import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig,MenuItem } from 'primeng/api';


interface City {
  name: string;
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'greek_stats';

  menuItems: MenuItem[];

  cities: City[] = [];
  selectedCity : City;

 
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.menuItems = [
      { label: 'Κατάλογος Dataset - Τουρισμός', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'Τουρισμός',
        icon: 'pi pi-globe',
        items: [
          { label: 'Δαπάνη ανά ταξίδι μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Ετήσια)', icon: 'pi pi-map', routerLink: ['/tourism', 1] },
          { label: 'Δαπάνη ανά ταξίδι κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)', icon: 'pi pi-map', routerLink: ['/tourism', 2] },
          { label: 'Δαπάνη ανά διανυκτέρευση μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Ετήσια)', icon: 'pi pi-map', routerLink: ['/tourism', 3] },
          { label: 'Δαπάνη ανά διανυκτέρευση κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)', icon: 'pi pi-map', routerLink: ['/tourism', 4] },
          { label: 'Μέση διάρκεια παραμονής ανά ταξίδι κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)', icon: 'pi pi-map', routerLink: ['/tourism', 5] },
          { label: 'Μέση διάρκεια παραμονής ανά ταξίδι μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Ετήσια)', icon: 'pi pi-map', routerLink: ['/tourism', 6] },

        ]
      }, 
      {
        label: 'Τουρισμός ανά Περιοχή',
        icon: 'pi pi-globe',
        items: [
          { label: 'Ταξιδιωτικά στοιχεία ανά περιφέρεια για τις κυριότερες χώρες προέλευσης ταξιδιωτών', icon: 'pi pi-map', routerLink: ['/region', 1] },
        ]
      }
    ];
  }

}

