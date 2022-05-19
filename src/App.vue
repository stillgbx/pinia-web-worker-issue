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

//
// worker imported with query suffixe, see: https://vitejs.dev/guide/features.html#import-with-query-suffixes
//
// const worker = new Worker()
// worker.postMessage('logCounter')

//
// worker imported with constructor, see: https://vitejs.dev/guide/features.html#import-with-constructors
//
const worker2 = new Worker(new URL('./workers/worker.js', import.meta.url), {
  type: 'module'
})
worker2.postMessage('logCounter')

//
// worker with comlink using pinia instance, see: https://github.com/GoogleChromeLabs/comlink
//
const worker3 = new Worker(new URL('./workers/worker-comlink.js', import.meta.url), {
  type: 'module'
})
const workerComlink1 = Comlink.wrap(worker3)
const getPiniaInstance = () => {
    return window._piniaInstance // does not work because the instance coulnd not be cloned
}
workerComlink1.logCounter(Comlink.proxy(getPiniaInstance))

//
// worker with comlink, see: https://github.com/GoogleChromeLabs/comlink
//
const worker4 = new Worker(new URL('./workers/worker-comlink.js', import.meta.url), {
  type: 'module'
})
const workerComlink2 = Comlink.wrap(worker3)
const getCounter = () => {
    return store.counter
}
workerComlink2.logCounter2(Comlink.proxy(getCounter))

</script>

<style scoped>
</style>
