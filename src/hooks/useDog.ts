import { onMounted, reactive } from 'vue'
import axios from 'axios';

export default function () {
    // data
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_6161.jpg'
    ])

    // methods
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    // hooks
    onMounted(()=>{
        getDog()
    })

    // 向外部提供东西
    return { dogList, getDog }
}