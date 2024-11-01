<template>
    <div class="game">
        <h2>游戏列表</h2>
        <slot :youxi="games"></slot>
    </div>
</template>

<script setup lang="ts" name="Game">
    import { reactive } from 'vue';

    let games = reactive([
        { id: '001#', name: '百战天虫' },
        { id: '002#', name: '三国演义' },
        { id: '003#', name: '杀戮地带' },
        { id: '004#', name: '吞食天地' }
    ])
</script>

<style scoped>
    .game {
        width: 200px;
        height: 300px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    h2 {
        background-color: orange;
        text-align: center;
        font-size: 20px;
        font-weight: 800;
    }
</style>