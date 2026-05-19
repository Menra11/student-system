# EduNova 教学管理平台

> 基于 Nuxt 3 的全栈、多角色教育管理系统，面向学校与培训机构，将学生、教师、课程与视频教学整合于统一平台。

## 角色功能

### 学生端
- **自助注册** — 使用学号、个人信息与班级完成注册
- **选课管理** — 浏览可选课程并进行选课操作
- **视频学习** — 在线观看课程视频，自动记录观看进度
- **成绩查询** — 查看各学期课程成绩与学分记录

### 教师端
- **课程概览** — 查看所授课程及选课学生概况
- **视频管理** — 上传、编辑标题与删除教学视频
- **学生信息** — 浏览所授课程的全部学生信息
- **成绩打分** — 对学生进行成绩评定与修改

### 管理员端
- **学生管理** — 查看、编辑与删除学生信息
- **教师管理** — 浏览与管理教师账号
- **课程管理** — 创建和维护课程目录
- **视频监管** — 浏览所有已上传的课程视频

## 技术栈

| 层级 | 技术 |
|------|------|
| **前端** |  Nuxt 3+ TailwindCSS 4 |
| **状态管理** | Pinia  + pinia-plugin-persistedstate |
| **图标** | Font Awesome 6（vue-fontawesome） |
| **后端** | Nitro 服务引擎（RESTful API） |
| **数据库** | MySQL via `mysql2/promise` 连接池 |
| **鉴权** | JWT 令牌 + 角色路由守卫 |
| **包管理** | pnpm |

## 架构亮点

- **纯 SPA**（`ssr: false`）— 客户端渲染，无需服务端水合
- **文件即路由** — Nuxt 根据 `pages/` 和 `server/api/` 自动生成前后端路由
- **角色守卫** — 全局中间件拦截未登录用户，按角色限制路由范围（`/{role}/{id}/...`）
- **登录持久化** — JWT 存入 localStorage + Pinia 持久化状态，刷新页面不丢失
- **视频存储** — 上传文件保存至 `assets/videos/`（已加入 .gitignore），开发环境下由 Nuxt 静态伺服

## 快速开始

```bash
# 安装依赖（postinstall 会自动执行 nuxt prepare）
pnpm install

# 启动开发服务器 http://localhost:3000
pnpm dev

# 生产构建
pnpm build

# 本地预览生产构建
pnpm preview
```

## 环境配置

在项目根目录创建 `.env` 文件：

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database
```

数据库连接池在 `server/api/db.ts` 中于模块加载时创建一次。

## 项目结构

```
src/
├── app.vue                  # 根组件（NuxtPage + 全局通知）
├── assets/css/main.css      # Tailwind CSS v4 入口
├── components/              # 可复用 UI 组件（HeadInfor,NotificationBox）
├── middleware/               # 全局鉴权守卫
├── pages/                   # 页面路由（按角色划分）
│   ├── login.vue / register.vue
│   ├── admin/[id]/
│   ├── teacher/[id]/
│   └── student/[id]/
├── server/api/              # Nitro 文件路由 API
│   ├── db.ts                # MySQL 连接池
│   ├── login.post.ts        # JWT 登录鉴权
│   └── [role]/              # 各角色专属接口
├── stores/                  # Pinia 状态仓库（user, notification）
└── types/                   # TypeScript 类型定义（按领域划分）
```
