import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})

//Implmenetujemy interfesj OnInit żeby mieć pewność. Że, dobrze implementujemy metody
//Mogibyśmy to zrobbić bez interefejsu ale wtedy jeśli zrobimy literówkę
// w ngoninit np( wszystko z małej napiszemy) to się możemy o tym nie dowiedzieć. I bedzie to trudne
// do wykrycia. A tak mając w interfejsie metody wirtualne musimy to poprawnie zaimplementować
export class ServerStatusComponent implements OnInit {
  currentStatus   = signal<'online' | 'offline' | 'unknown'>('offline');
//  private interval?: ReturnType<typeof setInterval>; // Wrtość zmiennej interval, która wysyłały do 
  // ngOnDestroy() ma być typu setInterval.
  private destroyRef = inject(DestroyRef);


  constructor(){ // Dzięki użyciu effect, jestem w stanie na bieżąco śledzić zmiany sygnału. 
    effect(
    ()=>{
     console.log(this.currentStatus());
    }
    );
  }

  ngOnInit(){
     const interval = setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus.set("online");
      }else if(rnd < 0.9){
        this.currentStatus.set("offline");
      }else{
        this.currentStatus.set("unknown");
      }

    }, 5000);
    this.destroyRef.onDestroy(() =>{
      clearInterval(interval);
    });

  }

  ngAfterViewInit(){
    console.log("AFTER VIEW INIT");
  }

  // Jeśli używamy interval który cały czas coś liczy, czy wywołuje funkcje na komponencie
  // który np usuneliś,y, to musimy go usunąć. Żeby nie mieć memory-leak
 // ngOnDestroy(): void {
   // clearTimeout(this.interval);
 // }
}
