import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
students:any=[];
student: String;
name: String;
department: String;
faculty: String;
matric_number: any;
level: any;
registered: boolean;
selectedStudent: String;
  constructor(private studentsService:StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents()
    .subscribe(students =>{
      console.log(students);
      this.students = students
    })
  }

  createStudent(event){
    event.preventDefault();
    
    var newStudent = {
      name: this.name,
      department: this.department,
      faculty: this.faculty,
      level: this.level,
      matric_number: this.matric_number,
      registered: this.registered
    };
      this.studentsService.createStudent(newStudent)
      .subscribe(student=>{
        this.students.push(student);
        this.name = '';
        this.department = '';
        this.faculty = '';
        this.level = '';
        this.matric_number = '';
        this.selectedStudent = null;
        
      })
  }

  deleteStudent(id) {
    const students = this.students;

    this.studentsService.deleteStudent(id).subscribe(data => {
      console.log(id);
      const index = this.students.findIndex(student => student._id == id);
      students.splice(index, 1)
    });
  }

  updateStudent(student){
    const _student = {
      _id: student._id,
      name: student.name,
      department: student.department,
      faculty: student.faculty,
      level: student.level,
      matric_number: student.matric_number,
      registered: !student.registered
    };
    this.studentsService.updateStudent(_student)
    .subscribe(data =>{
      const index = this.students.findIndex(student=> student._id == _student._id)
      this.students[index] = _student
    })
  }

  choice(student) {
    console.log(student);
    return student.registered;
  }
}
