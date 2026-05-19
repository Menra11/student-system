<template>
  <div>
    <div class=" mx-auto px-4 py-8">
      <!-- 搜索和过滤区域 -->
      <div class="mb-6 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索课程..."
            class="px-4 py-2 border rounded-md"
          >
        </div>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          @click="refreshData"
        >
          刷新数据
        </button>
      </div>

      <!-- 数据表格 -->
      <div class="overflow-x-auto rounded-lg shadow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead
            class="bg-blue-100"
            align="center"
            valign="middle"
          >
            <tr>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                课程ID
              </th>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                课程名称
              </th>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                学分
              </th>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                教授教师
              </th>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                课室
              </th>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                时间表
              </th>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                描述
              </th>
              <th class="px-3 py-4 text-sm whitespace-nowrap text-blue-700">
                操作
              </th>
            </tr>
          </thead>
          <tbody
            class="bg-white divide-y divide-gray-200"
            align="center"
            valign="middle"
          >
            <tr
              v-for="course in filteredcourses"
              :key="course.course_id"
              class="hover:bg-blue-50 transition-colors"
            >
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                {{ course.course_id }}
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                {{ course.course_name }}
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                {{ course.credit }}
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                {{ course.teacher_name }}
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                {{ course.classroom }}
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                {{ course.schedule }}
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                {{ course.description }}
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                <NuxtLink
                  :to="`/admin/${route.params.id}/course/${course.course_id}`"
                  class="text-blue-500 hover:text-blue-700 mr-3 transition-colors"
                >查看</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  Course,
  CoursesResponse,
} from '~/types/admin/course'

const route = useRoute()

definePageMeta({
  title: '课程管理', // 设置页面标题
})

// 数据状态
const courses = ref<Course[]>([])
const searchQuery = ref('')

// 获取课程数据
const fetchCourses = async () => {
  const { Courses } = await $fetch<CoursesResponse>('/api/admin/courses', {
    method: 'GET',
  })
  if (Courses) {
    courses.value = Courses
  }
}
// 过滤后的课程数据
const filteredcourses = computed(() => {
  let result = courses.value
  // 按搜索词过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(
      c =>
        c.course_name.toLowerCase().includes(query)
        || c.course_id.toString().includes(query)
        || (c.credit.toString() && c.credit.toString().includes(query))
        || c.teacher_name.toLowerCase().includes(query),
    )
  }
  return result
})

const refreshData = () => {
  fetchCourses()
}

onUpdated(() => {
  fetchCourses()
})

// 初始化
onMounted(() => {
  fetchCourses()
})
</script>

<style scoped></style>
