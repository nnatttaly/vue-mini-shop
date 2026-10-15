import { ref } from 'vue'

export function useAsync<T>(fn: () => Promise<T>) {
  const data = ref<T | null>(null)
  const isLoading = ref(true)
  const isError = ref(false)

  async function run() {
    try {
      isLoading.value = true
      isError.value = false
      data.value = await fn()
    } catch (err) {
      console.error(err)
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return { data, isLoading, isError, run }
}
