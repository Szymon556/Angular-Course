import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, DashboardItemComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
 
  
}
