import { Injectable } from "@angular/core";
import { InvestData } from "./invest.model";
import { NewInvestData } from "./input/new-invest.model";

@Injectable({ providedIn: "root" })
export class AppService {
  private investments = [
    {
    year: '2022',
    interest: 500,
    valueEndOfYear: 10500,
    annualInvestment: 1000,
    totalInterest: 500,
    totalAmountInvested: 11000
  },
  {
    year: '2023',
    interest: 525,
    valueEndOfYear: 12025,
    annualInvestment: 1000,
    totalInterest: 1025,
    totalAmountInvested: 12000
  },
  ];

  constructor(){
    const  investments = localStorage.getItem("investments");

    if(investments){
      this.investments = JSON.parse(investments);
    }

  }

  getInvests() {
    return this.investments;
  }

  


  calculateInvestmentResults(newInvestData: NewInvestData) {
    const {
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration
    } = newInvestData;

   
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      this.investments.push({
        year: year.toString(),
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.seveInvests();
   
  }

  private seveInvests(){
    localStorage.setItem("investments", JSON.stringify(this.investments));
  }

  
 
  
}
