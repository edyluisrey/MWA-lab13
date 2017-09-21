import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  private students: [{id:string,name:string, stuID:string, email:string}]
  constructor() {
    this.students = [
             {id:'1',name:'Asaad',stuID:'12345' ,email:'asaad@mum.edu'},
             {id:'2',name:'Edy',stuID:'12346', email:'eaguirre378@gmail.com'}
             ];
  }

  getData() {
    return this.students;
  }

  getDataById(id:string){
		for(let student of this.students){
			if(student.id===id) return student;
		}
  }

}
