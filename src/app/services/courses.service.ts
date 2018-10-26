import { Courses } from './../models/courses.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // public API = 'http://5bc74778cc83760013c1ccbc.mockapi.io/api/courses';
  public API = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  getAllCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.API);
  }

  getCourse(id: number): Observable<Courses> {
    return this.http.get<Courses>(`${this.API}/${id}`);
  }

  addCourse(course: Courses): Observable<Courses> {
    return this.http.post<Courses>(this.API, course);
  }

  deleteCourse(id: number): Observable<Courses> {
    return this.http.delete<Courses>(`${this.API}/${id}`);
  }

  updateCourse(course: Courses): Observable<Courses> {
    return this.http.put<Courses>(`${this.API}/${course.id}`, course);
  }
}
