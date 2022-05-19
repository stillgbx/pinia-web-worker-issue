import { useStore } from '../store/store'

onmessage = function(evt) {
    if (evt.data === 'logCounter') {
        const store = useStore()
        console.log('from worker:', store.counter)
    }
}
