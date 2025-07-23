import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AppService } from './app.service';
import { InputComponent } from './input/input.component';
import { DecimalPipe } from '@angular/common';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InputComponent, DecimalPipe, InvestmentResultsComponent],
})
export class AppComponent {

investments = this.appService.getInvests();

constructor(private appService:AppService) {

}

get isEmpty(): boolean{
    
    return this.appService.getInvests().length === 0;
} 

}
