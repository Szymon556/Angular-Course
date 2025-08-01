import { Component,  Input, inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.onRemoveTask(this.task.id);
  }
  
}
