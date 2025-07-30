import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [NewTicketComponent, TicketComponent]
})
export class TicketsComponent {
    tickets: Ticket[] = [];

    onAdd(ticketData:{title:string;text: string}){
        const ticket : Ticket = {title: ticketData.title,
            request: ticketData.text,
            id: Math.random().toString(),
            status: 'open'
        }

        this.tickets.push(ticket);
    }
// czyli za pomocą metody map tworzymy nową tablicę ticketów
// przechodzi ona przez każdy ticket w tablicy
// gdzie jeśli znajdziemy ticket który ma taki sam id to zostanie jego atrybut zmieniony na closed.
// Do tego według podejścia reaktywnego trzeba skopiowac całą tablice żeby odświeżyć widok.
    onCloseTickets(id:string){
        this.tickets = this.tickets.map((ticket) => {
            if(ticket.id === id){
                return {...ticket, status: 'closed'} // ta skłądnia pozwala skopiować wszystkie właściwości obiketu, i nadpisujemy tylko atrybut status
            }
            return ticket;
        });
    }

}