// import { reactive } from 'vue'
// import type { MaybeRef } from 'vue'

// export function useCounter(initial_value: MaybeRef<number> = 0) {
//   const data = reactive({
//     count: initial_value,
//   })
//   const increment = () => data.count++

//   return { ...data, increment }
// }

// EXPLANATION: I think in a simple value like a initial_number,
// 'reactive' is not needed, 'ref' will do and is much simpler.
import { ref } from 'vue'

export function useCounter(initial_value = 0) {
    const count = ref(initial_value)

    const increment = () => count.value++

    return { count, increment }
}
