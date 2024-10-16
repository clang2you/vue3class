import { computed, onMounted, ref } from 'vue'

export default function () {
    // data
    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })

    // methods
    function add() {
        sum.value += 1
    }

    // hooks
    onMounted(() => {
        add()
    })

    return { sum, add, bigSum }
}
