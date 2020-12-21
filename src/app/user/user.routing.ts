import { Routes } from '@angular/router';

export const userRoutes: Routes = [
    {
      path: 'parent',
      loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule)
    },
    {
      path: 'student',
      loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    },  
    {
        path: 'teacher',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
    }
  ];