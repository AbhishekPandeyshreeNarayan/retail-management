import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Default to first item active
  activeItem: number = 1;

  // Image and description data
  productImage: string = '../../assets/images/Repos-Mockup.png';
  logoImage: string = '../../assets/images/repos-logo-img.png';
  description: string = 'Advanced cloud based & server based enterprise management system for the food and beverage service industry.';

  // Method to set active item
  setActiveItem(item: number) {
    this.activeItem = item;

    // Change the image and description based on the active item
    if (item === 1) {
      this.productImage = '../../assets/images/Repos-Mockup.png';
      this.logoImage = '../../assets/images/repos-logo-img.png';
      this.description = 'Advanced cloud based & server based enterprise management system for the food and beverage service industry.';
    } else if (item === 2) {
      this.productImage = '../../assets/images/repos-2.png';
      this.logoImage = '../../assets/images/repos-logo-img.png';
      this.description = 'Paperless and Hassle-free Management of Restaurant tables and order relay to kitchen which improves the efficiency of operations while also reducing manual errors.';
    } else if (item === 3) {
      this.productImage = '../../assets/images/Repos-Mockup1-1.png';
      this.logoImage = '../../assets/images/renalyse-logo.png';
      this.description = 'May it be a single outlet or a chain of restaurants, always know the latest happenings at all outlets from anywhere,at any time; with our reporting mobile app, ReAnalyse.';
    }
  }
  isDropdownOpen = false;

  toggleDropdown(state: boolean) {
    this.isDropdownOpen = state;
  }

  // Optionally, you can add a method to handle selection
  onSelect(value: string) {
    this.isDropdownOpen = false; // Close dropdown on selection
  }
  constructor() { }

  ngOnInit() {
  }

}
