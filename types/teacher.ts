export interface Teacher {
  teacher_id: number;
  teacher_name: string;
  gender?: string;
  title?: string;
  birth_date?: string;
  phone?: string;
  email?: string;
}
export interface TeachersResponse {
  Teachers: Teacher[];
}
export interface TeacherResponse {
  Teacher: Teacher;
}