import { Component, OnInit } from '@angular/core';
import { DbService } from '../db/db.service';

@Component({
  selector: 'app-stundent',
  template: `
        <h3>Students</h3>
        <ul>
            <li *ngFor="let student of students">
               <a [routerLink]="['/profile/',student.id]">{{student.name}}</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
  `,
  styles: []
})
export class StundentComponent implements OnInit {
  students: [{id:string,name:string, stuID:string, email:string}]  
  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.students = this.dbService.getData();
  }

}
