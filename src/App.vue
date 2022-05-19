<template>
    <pre>
        {{ store.counter }}
    </pre>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { useStore } from './store/store'
import Worker from './workers/worker?worker'

const store = useStore()
store.counter++

const worker = new Worker()
worker.postMessage('updateCounter')

</script>

<style scoped>
</style>
