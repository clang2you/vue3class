import { customRef } from "vue"

export default function (initValue: string, delay: number) {
    // 使用 Vue 提供的 customRef 定义响应式数据
    let timer: number
    // track(跟踪)、trigger(触发)
    let msg = customRef((track, trigger) => {
        return {
            // get 何时调用？-- msg 被读取时
            get() {
                track() // 告诉 Vue 数据 msg 很重要，要对 msg 进行持续关注，一旦 msg 变化就去更新
                return initValue
            },
            // set 何时调用？-- msg 被修改时
            set(value) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    initValue = value
                    trigger() // 通知 Vue 一下数据 msg 变化了
                }, delay)
            }
        }
    })
    return { msg }
}

