import { AfterViewInit, Component, ElementRef, viewChild, OnInit, output } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
// @ViewChild('form') private form?: ElementRef<HTMLFormElement>;// Czyli odnosimy się do elementu z tagiem #form. ?mówi że wartość może być opcjonalna
  // Żeby Type Script wiedział że to pole może być undefined. I będzie podzczas pierwszego renedrowania
private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

// Teraz damy output żeby przekazywać dane na temat nowego ticketu do komponentu wyżej w hierarhi
// gdzie potem bedzie to dodawane do tablicy z nowymi ticketami.
add = output<{title:string; text:string}>();
enteredTitle="";
enteredText="";
// Ta metoda gwarantuje mi dostęp do elementu który został wybrany za pomocą viewChild.
// Metoda ta jest związana w Component LifeCycle, w przeciwieństwie do metody ngOnInit
// gwarantujemy że ten element juz istnieje. Że został wyrenderowany. Czyli kiedy widok DOM jest już gotowy.
// WSM ten problem występuje głównie przy dekoratorach.
  ngAfterViewInit(){
    console.log("AFTER VIEW INIT");
    console.log(this.form().nativeElement);
  }

  ngOnInit(){
    console.log("ON INIT");
    console.log(this.form().nativeElement);
  }

  onSubmit(){
    this.add.emit({title:this.enteredTitle,text: this.enteredText});
   // this.form().nativeElement.reset();
   // Tutaj odnosimy się natywnego elementu DOM który jest forumalrzem, który jest otagowant przez nas #form. I resetujemy jego zawartość.
   this.enteredText='';
   this.enteredTitle='';
  }
}
