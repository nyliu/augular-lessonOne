import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {

  traineeList: Trainee[] = [
    new Trainee("Amar", "Reddy", 33, "Angular"),
    new Trainee("Lucy", "Johnson", 23, "Java"),
    new Trainee("David", "Leo", 36, "React"),
    new Trainee("Sunny", "Luis", 42, "Angular"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
