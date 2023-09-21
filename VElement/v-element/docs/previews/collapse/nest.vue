<!-- 嵌套的折叠面板 -->
<!-- 基础折叠面板 -->
<template>
    <v-collapse v-model="activeItemsNames">
        <v-collapse-item name="item1" title="面板1">
            <v-collapse v-model="activeItemsNamesInner1">
                <v-collapse-item name="item1" title="面板1-1">
                    面板1-1内容
                </v-collapse-item>
            </v-collapse>
            <v-collapse v-model="activeItemsNamesInner2">
                    <v-collapse-item name="item1" title="面板1-2">
                        面板1-2内容
                    </v-collapse-item>
                </v-collapse>
        </v-collapse-item>
    </v-collapse>
</template>
<script setup>
import VCollapse from "@/components/Collapse/Collapse.vue";
import VCollapseItem from "@/components/Collapse/CollapseItem.vue";
import { ref } from "vue";

const activeItemsNames = ref([]);
const activeItemsNamesInner1 = ref([]);
const activeItemsNamesInner2 = ref([]);
</script>
