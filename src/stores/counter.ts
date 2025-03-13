// replace below with a store. the below only exists to silence errors
// export const useCounterStore = () => ({ increment: null })

// EXPLANATION: A global 'counter' store will now have the state 'count'
// available to all component that will consume this store.
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++;
        },
    }
});
