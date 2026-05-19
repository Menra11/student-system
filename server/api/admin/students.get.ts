import pool from '@/server/api/db'

export default defineEventHandler(async () => {
  // 获取学生数据
  const [students] = await pool.query(`
      SELECT s.student_id,s.student_name,s.gender,s.birth_date,s.class_id,s.phone,s.email, c.class_name 
      FROM Student s
      LEFT JOIN Class c ON s.class_id = c.class_id
    `)

  return {
    Students: students,
  }
})
