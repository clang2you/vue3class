import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk', {
    actions: {
        async getATalk() {
            let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let obj = { id: nanoid(), title }
            this.talkList.unshift(obj)
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            // talkList: [
            //     { id: '001', title: '今天你有点怪，哪里怪？怪好看的！' },
            //     { id: '002', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
            //     { id: '003', title: '心里给你留了一块地，我的死心塌地' }
            // ]
            talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})