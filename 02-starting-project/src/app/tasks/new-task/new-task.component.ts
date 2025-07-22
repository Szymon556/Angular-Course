import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input( {required: true} ) userId!: string; 
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  private taskService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enteredDate,
      summary: this.enteredSummary,
      date: this.enteredDate}, this.userId
    )
    
    this.close.emit();
  }
}
