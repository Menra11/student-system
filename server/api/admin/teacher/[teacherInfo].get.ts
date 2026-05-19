import pool from '@@/server/api/db'

export default defineEventHandler(async (event) => {
  const teacher_id = event.context.params?.teacherInfo

  // 获取教师基本信息
  const [teacher] = await pool.query(
    `SELECT teacher_id,teacher_name,gender,birth_date,title,phone,email FROM teacher
      WHERE teacher_id = ?;
    `,
    [teacher_id],
  )

  if (!teacher) {
    return {
      success: false,
      message: '教师不存在',
    }
  }

  return {
    Teacher: teacher,
  }
})
