import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    investments = this.appService.getInvests();
    
    constructor(private appService:AppService) {
    
    }
    
    get isEmpty(): boolean{
        
        return this.appService.getInvests().length === 0;
    }
}
