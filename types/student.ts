// types/student.ts
export interface Student {
  student_id: number;
  student_name: string;
  gender: string;
  birth_date: string;
  class_id: number;
  class_name: string;
  phone: string;
  email: string;
}

export interface Class {
  class_id: number;
  class_name: string;
}

export interface Pagination {
  total: number;
  total_pages: number;
}

export interface StudentsResponse {
  Students: Student[];
}
export interface StudentResponse {
  Student: Student;
}

export interface ClassResponse {
  Classes: Class[];
}

// [id]
export interface Score {
  score_id: number
  course_name: string
  credit: number
  teacher_name: string
  score: number
  semester: string
}
export interface StudentGet  {
  Student: Student
  Scores: Score[]
}