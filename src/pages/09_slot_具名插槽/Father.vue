<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Category title="热门游戏列表">
                <template v-slot:s2>
                    <ul>
                        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
                    </ul>
                </template>
                <template v-slot:s1>
                    <h2>热门游戏列表</h2>
                </template>
            </Category>
            <!-- <Category title="今日美食城市">
                <img src="imgUrl" alt="">
            </Category>
            <Category title="今日影视推荐">
                <video src="videoUrl" controls></video>
            </Category> -->
        </div>
    </div>
</template>

<script setup lang="ts" name="Father">
    import { reactive, ref } from 'vue';
    import Category from './Category.vue';

    // data
    let games = reactive([
        { id: '001#', name: '百战天虫' },
        { id: '002#', name: '三国演义' },
        { id: '003#', name: '杀戮地带' },
        { id: '004#', name: '吞食天地' }
    ])

    let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
    let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
</script>

<style scoped>
    .father {
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
    }

    img,
    video {
        width: 100%;
    }
</style>