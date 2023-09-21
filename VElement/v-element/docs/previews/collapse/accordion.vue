<!-- 手风琴模式折叠面板 -->
<template>
    <v-collapse v-model="activeItemsNames" accordion>
        <v-collapse-item name="item21" title="这是第一个面板的标题">
            在这里放第一个面板的内容
        </v-collapse-item>
        <v-collapse-item name="item2" title="这是第二个面板的标题">
            在这里放第二个面板的内容
        </v-collapse-item>
        <v-collapse-item name="item3" title="这是第三个面板的标题">
            在这里放第三个面板的内容
        </v-collapse-item>
    </v-collapse>
</template>
<script setup>
import VCollapse from "@/components/Collapse/Collapse.vue";
import VCollapseItem from "@/components/Collapse/CollapseItem.vue";
import { ref } from "vue";

const activeItemsNames = ref([]);
</script>
