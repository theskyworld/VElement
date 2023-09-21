<!-- 被禁用的折叠面板 -->
<template>
    <v-collapse v-model="activeItemsNames">
        <v-collapse-item name="item6" title="disabled" disabled></v-collapse-item>
    </v-collapse>
</template>
<script setup>
import VCollapse from "@/components/Collapse/Collapse.vue";
import VCollapseItem from "@/components/Collapse/CollapseItem.vue";
import { ref } from "vue";

const activeItemsNames = ref([]);
</script>
