import * as Comlink from 'comlink/dist/esm/comlink.min.mjs'

const obj = {
    async logCounter(cb) {
        const counter = await cb()
        console.log('from worker-comlink:', counter)
    }
}
  
Comlink.expose(obj)
