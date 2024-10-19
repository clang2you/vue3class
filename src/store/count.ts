import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
    // actions 里面放置的是一个一个的方法，用户相应组件中的“动作”
    actions: {
        increment(value: number) {
            // console.log('increment调用了', value);
            if (this.sum < 10) {
                this.sum += value
            }
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6
        }
    },
    getters: {
        // bigSum: state => state.sum * 10
        bigSum():number{
            return this.sum * 10
        }
    }
})