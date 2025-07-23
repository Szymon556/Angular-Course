import { Component, Input, EventEmitter, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppService } from '../app.service';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})



export class InputComponent {
  private appService = inject(AppService);
  EnteredInitialInvestment = '0'; // Ponieważ nawet jak w Forms damy type="number" to i tak zawsz otrzymujemy Stringa
  EnteredAnnualInvestment = '0';
  EnteredExpectedReturn = '5';
  EnteredDuration = '10';



  onSubmit(){
    this.appService.calculateInvestmentResults({
      initialInvestment: +this.EnteredInitialInvestment,
      annualInvestment: +this.EnteredInitialInvestment,
      expectedReturn: +this.EnteredExpectedReturn,
      duration: +this.EnteredDuration
    })
}
}

