import pool from '@@/server/api/db'

export default defineEventHandler(async () => {
  // 获取课程数据
  const [courses] = await pool.query(`
      SELECT c.course_id,c.course_name,c.credit,t.teacher_name,c.classroom,c.schedule,c.description 
      FROM Course c
      left join Teacher t on c.teacher_id = t.teacher_id
    `)

  return {
    Courses: courses,
  }
})
