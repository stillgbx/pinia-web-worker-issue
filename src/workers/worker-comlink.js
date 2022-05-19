import * as Comlink from 'comlink/dist/esm/comlink.min.mjs'
import { useStore } from '../store/store'

const obj = {
    async logCounter(getPiniaInstanceCallbacl) {
        const piniaInstance = await getPiniaInstanceCallbacl()
        const store = useStore(piniaInstance)
        console.log('from worker-comlink (using store):', store.counter)
    },
    async logCounter2(getCounterCallback) {
        const counter = await getCounterCallback()
        console.log('from worker-comlink:', counter)
    }
}
  
Comlink.expose(obj)
