<template>
  <div>
    <div class="mb-6">
      <button
        @click="goBack"
        class="flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        <font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-2" />
        返回
      </button>
    </div>
    <div class="bg-white rounded-lg shadow p-6">
    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">基本信息</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-gray-600">教师ID</label>
              <p class="mt-1">{{ teacher.teacher_id }}</p>
            </div>
            <div>
              <label class="block text-gray-600">教师姓名</label>
              <p class="mt-1">{{ teacher.teacher_name }}</p>
            </div>
            <div>
              <label class="block text-gray-600">性别</label>
              <p class="mt-1">{{ teacher.gender}}</p>
            </div>
            <div>
              <label class="block text-gray-600">出生日期</label>
              <p class="mt-1">{{ formatDate(teacher.birth_date) }}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 class="text-xl font-semibold mb-4">联系信息</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-gray-600">职位</label>
              <p class="mt-1">{{ teacher.title }}</p>
            </div>
            <div>
              <label class="block text-gray-600">电话</label>
              <p class="mt-1">{{ teacher.phone || '未提供' }}</p>
            </div>
            <div>
              <label class="block text-gray-600">邮箱</label>
              <p class="mt-1">{{ teacher.email || '未提供' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import type { Teacher,TeacherResponse,TeachersResponse} from "~/types/teacher";
const route = useRoute()
const router = useRouter()
definePageMeta({
  title: '教师信息'
});
const teacher = ref<Teacher>({
  teacher_id: 0,
  teacher_name: '',
  gender: '',
  title: '',
  birth_date: '',
  phone: '',
  email: ''
})

const goBack = () => {
  router.go(-1);
};
// 格式化日期
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN')
}

// 获取教师信息
const fetchTeacher = async () => {
  const { Teacher } = await $fetch<TeacherResponse>(`/api/teacher/${route.params.teacherInfo}`,{
    method: 'GET'
  })
  if (Teacher) {
    teacher.value = Teacher[0]
  }
}
onMounted(() => {
  fetchTeacher()
})
</script>

<style>

</style>