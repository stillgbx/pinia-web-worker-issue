import { defineStore } from 'pinia'

const useStore = defineStore('testStore',
{
    state: () => {
        return {
            counter: 0
        }
    }
})

export { useStore }
