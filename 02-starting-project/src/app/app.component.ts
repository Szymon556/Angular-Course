import { Component } from '@angular/core';


import { DUMMY_USERS } from './dumy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;

  get SelectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectedUser(id:string){
    this.selectedUserId = id;
     
  }
 

}
