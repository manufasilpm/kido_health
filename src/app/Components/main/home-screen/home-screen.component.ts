import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  selectedCard: number | null = null;

 
  ngOnInit(): void {
    
  }

  constructor(private router: Router) {}

  cardClicked(value: string): void {
    this.router.navigate(['/login', { cardType: value }]);
  }

}
