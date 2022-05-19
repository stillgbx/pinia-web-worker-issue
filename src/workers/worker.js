import { useStore } from '../store/store'

onmessage = function(evt) {
    console.log(evt)
    const store = useStore()
    store.counter++
};
