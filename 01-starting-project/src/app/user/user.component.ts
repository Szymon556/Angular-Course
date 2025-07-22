import { Component, Input,Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS  } from '../dumy-users';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({ 
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter <string>();
 
  imagePath(){
    return "assets/users/users/" + this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
  }

}
