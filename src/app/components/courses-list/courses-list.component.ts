import { Courses } from './../../models/courses.model';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public subscription: Subscription;
  public courses: Courses[] = [];
  constructor(public coursesService: CoursesService) { }

  ngOnInit() {
    this.subscription = this.coursesService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
  }

  onDeleteCourse(id: number) {
    this.subscription = this.coursesService.deleteCourse(id).subscribe(data => {
      this.updateDataAfterDelete(id);
    });
  }

  updateDataAfterDelete(id: number) {
    for (let i = 0; i < this.courses.length; i++) {
       if (this.courses[i].id === id) {
        this.courses.splice(i, 1);
        break;
       }
    }
  }
}
