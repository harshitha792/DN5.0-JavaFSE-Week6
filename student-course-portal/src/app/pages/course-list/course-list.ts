import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  selectedCourseId?: number;

  courses = [
    { id: 1, name: 'Java', code: 'CS101', credits: 4 },
    { id: 2, name: 'Angular', code: 'CS102', credits: 4 },
    { id: 3, name: 'SQL', code: 'CS103', credits: 3 },
    { id: 4, name: 'Spring Boot', code: 'CS104', credits: 4 },
    { id: 5, name: 'Git', code: 'CS105', credits: 2 }
  ];

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }
}
