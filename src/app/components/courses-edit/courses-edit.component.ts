import { CoursesService } from './../../services/courses.service';
import { Subscription } from 'rxjs';
import { Courses } from './../../models/courses.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {

  public course: Courses;
  public subscription: Subscription;
  public subscriptionParams: Subscription;

  constructor(
    public coursesService: CoursesService,
    public routerService: Router,
    public activatedRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.course = new Courses();
    this.loadData();
  }

  loadData() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe(data => {
      const id = data['id'];
      this.subscription = this.coursesService.getCourse(id).subscribe(course => {
        this.course = course;
      });
    });
  }

  onEditCourse(course: Courses) {
    this.subscription = this.coursesService.updateCourse(this.course).subscribe(data => {
      this.routerService.navigateByUrl('courses');
    });
  }

}
