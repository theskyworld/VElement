<!-- 指定弹出位置的弹出提示 -->
<template>
    <v-tooltip content="hello tooltip" :popperOptions="topOption">
        <v-button type="primary">top</v-button>
    </v-tooltip>
    <v-tooltip content="hello tooltip" :popperOptions="bottomOption">
        <v-button type="primary">bottom</v-button>
    </v-tooltip>
    <v-tooltip content="hello tooltip" :popperOptions="leftOption">
        <v-button type="primary">left</v-button>
    </v-tooltip>
    <v-tooltip content="hello tooltip" :popperOptions="rightOption">
        <v-button type="primary">right</v-button>
    </v-tooltip>
</template>
<script setup>
import VButton from "@/components/Button/Button.vue";
import VTooltip from "@/components/Tooltip/Tooltip.vue";
import { ref } from "vue";

const topOption = ref({
    placement: 'top',
    strategy: 'fixed'
})
const bottomOption = ref({
    placement: 'bottom',
    strategy: 'fixed'
})
const leftOption = ref({
    placement: 'left',
    strategy: 'fixed'
})
const rightOption = ref({
    placement: 'right',
    strategy: 'fixed'
})
</script>
