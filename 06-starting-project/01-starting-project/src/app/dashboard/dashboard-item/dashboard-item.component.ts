import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host:{
    class: 'dashboard-item'
  }
})
export class DashboardItemComponent {
  //@Input({ required: true }) image!: { src: string; alt: string };

  // Obiekt typu { src, alt }, reprezentujący obrazek, który będzie przekazywany z zewnątrz.
  // 'required: true' sygnalizuje, że właściwość musi zostać dostarczona.
  // Znak '!' oznacza, że zapewniamy Angularowi, iż wartość nie będzie niezainicjowana (undefined).
  image =  input.required<{ src: string; alt: string }>();
  title = input.required<string>();

}
