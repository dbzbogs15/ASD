import { CoursesService } from './../../services/courses.service';
import { Subscription } from 'rxjs';
import { Courses } from './../../models/courses.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  public subscription: Subscription;
  public course: Courses;

  constructor(
    public coursesService: CoursesService,
    public routerService: Router
    ) { }

  ngOnInit() {
    this.course = new Courses();
  }

  onAddCourse() {
    this.subscription = this.coursesService.addCourse(this.course).subscribe(data => {
      if (data && data.id) {
        this.routerService.navigate(['courses']);
      }
    });
  }

}
