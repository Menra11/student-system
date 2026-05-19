import pool from '@@/server/api/db'

export default defineEventHandler(async () => {
  // 获取班级数据
  const [classes] = await pool.query(`
      SELECT c.class_id, c.class_name 
      FROM class c;
    `)
  return {
    Classes: classes,
  }
})
