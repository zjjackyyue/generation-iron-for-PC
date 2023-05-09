<template>
    <el-container id="layout-container1">
        <el-row>
            <el-col :span="4">
                <el-menu :default-active="activeIndex"
                    active-text-color="#ffd04b"
                    background-color="black"
                    default-active="1"
                    text-color="white"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect">
                    <el-menu-item index="1">Home</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>Gym Exercises</template>
                        <el-menu-item index="2-1">Biceps</el-menu-item>
                        <el-menu-item index="2-2">Triceps</el-menu-item>
                        <el-menu-item index="2-3">Shoulder</el-menu-item>
                        <el-menu-item index="2-4">Forearm</el-menu-item>
                        <el-menu-item index="2-5">Trapezius</el-menu-item>
                        <el-menu-item index="2-6">Latissimus Dorsi</el-menu-item>
                        <el-menu-item index="2-7">Abdominal Muscles</el-menu-item>
                        <el-menu-item index="2-8"> Hips</el-menu-item>
                        <el-menu-item index="2-9"> Thigh</el-menu-item>
                        <el-menu-item index="2-10"> Legs</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>

            <el-col :span="20">
                <el-main>
                    <div>
                        <img src="./assets/fiteness/WordartOlympiaWinner.png"
                            style="width:50%;height:50%" />
                    </div>
                    <el-scrollbar>
                        <div class="scrollbar-flex-content">
                            <div v-for="item in champs"
                                :key="item.id"
                                class="item-in-scrollbar">
                                <div style="width: 200px;height: 220px;display: flex;align-items: center;">
                                    <img ref="imgInScrollbar"
                                        :src=item.data
                                        style="width: 200px;" />
                                </div>
                                <span>{{ item.name }}</span>
                                <span>({{ item.time }})</span>
                            </div>
                        </div>
                    </el-scrollbar>
                    <el-row style="margin-top: 100px;">
                        <el-col :span="12">
                            <div style="max-width: 570px;">
                                <img src="./assets/fiteness/WordartNews.png"
                                    style="width: 30%;height: 30%;" />
                                <img src="./assets/fiteness/FitnessNewsCover.jpg"
                                    alt="FitnessNewsCover"
                                    style="max-width: 400px;max-height: 400px;">
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div style="text-align: left;max-width: 570px;">
                                <div style="display: inline;margin-left: 125px;">
                                    <img src="./assets/fiteness/WordArtMarket.png"
                                        style="width: 30%;height: 30%;margin-top: 100px;" />
                                </div>
                                <img src="./assets/fiteness/equipment.jpeg"
                                    style="max-width: 400px;max-height: 400px;" />
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
            </el-col>
        </el-row>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<style>
#layout-container1 {
    text-align: center;
    background: #000;
    color: aliceblue;
    height: auto;
    min-width: 1200px;
}

.el-menu {
    background: rgb(0, 0, 0);
    min-width: 200px;
}

#layout-container1 .scrollbar-flex-content {
    display: flex;
    height: 300px;
    gap: 10px;
}

#layout-container1 .item-in-scrollbar {
    display: flex;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>

<script setup>
import { ref } from 'vue';

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

async function fetchHistoricalChamps() {
    const URL = 'http://localhost:3000/array';
    return await fetch(URL).then(res => res.json());
}

const champs = ref([]);

fetchHistoricalChamps().then(data => {
    data.forEach(element => {
        element.data = 'data:image/png;base64,' + element.data
    });
    champs.value = data;
});

</script>
