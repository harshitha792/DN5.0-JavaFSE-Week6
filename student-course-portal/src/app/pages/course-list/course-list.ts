import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../components/course-card';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  isLoading = true;
  selectedCourseId?: number;

  courses = [
    { id: 1, name: 'Java', code: 'CS101', credits: 4, gradeStatus: 'passed' as const },
    { id: 2, name: 'Angular', code: 'CS102', credits: 4, gradeStatus: 'pending' as const },
    { id: 3, name: 'SQL', code: 'CS103', credits: 3, gradeStatus: 'failed' as const },
    { id: 4, name: 'Spring Boot', code: 'CS104', credits: 4, gradeStatus: 'passed' as const },
    { id: 5, name: 'Git', code: 'CS105', credits: 1, gradeStatus: 'pending' as const }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: { id: number }): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }
}
