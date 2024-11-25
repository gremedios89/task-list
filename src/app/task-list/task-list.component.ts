import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

export interface Task {
  id: number;
  name: string;
  completed: boolean
}

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule,MatButtonModule,MatListModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements
OnInit, AfterViewInit, AfterViewChecked  {
  isFocused = false;
  taskForm!: FormGroup;

  tasks: Task[] = [];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      task: [''],
    });
  }

  onFocus() {
    this.isFocused = true;
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  ngAfterViewChecked(): void {
    feather.replace();
  }

  addTask(): void {
    const taskValue = this.taskForm.get('task')?.value;
    if (taskValue) {
      this.tasks.push({ id: this.tasks.length + 1 ,name: taskValue, completed: false });
      this.taskForm.reset();
    }
    console.log(this.tasks);
  }

  hideButtons(): void {
    this.isFocused = false;
    this.taskForm.reset();
  }

}
