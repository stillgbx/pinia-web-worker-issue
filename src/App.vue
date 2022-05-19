<template>
    <pre>
        {{ store.counter }}
    </pre>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import * as Comlink from 'comlink/dist/esm/comlink.min.mjs'
import { useStore } from './store/store'
// import Worker from './workers/worker?worker' // import with query suffixe breaks worker with comlink

const store = useStore()
store.counter++

// worker imported with query suffixe, see: https://vitejs.dev/guide/features.html#import-with-query-suffixes
// const worker = new Worker()
// worker.postMessage('logCounter')

// worker imported with constructor, see: https://vitejs.dev/guide/features.html#import-with-constructors
const worker2 = new Worker(new URL('./workers/worker.js', import.meta.url), {
  type: 'module'
})
worker2.postMessage('logCounter')

// worker with comlink, see: https://github.com/GoogleChromeLabs/comlink
const worker3 = new Worker(new URL('./workers/worker-comlink.js', import.meta.url), {
  type: 'module'
})
const workerComlink = Comlink.wrap(worker3)
const callback = () => {
    return store.counter
}
workerComlink.logCounter(Comlink.proxy(callback))

</script>

<style scoped>
</style>
