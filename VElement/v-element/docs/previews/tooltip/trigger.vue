<!-- 指定触发方式的弹出提示 -->
<template>
    <v-tooltip :trigger="triggerEvent" content="hello tooltip">
        <v-button type="primary">click</v-button>
    </v-tooltip>
</template>
<script setup>
import VButton from "@/components/Button/Button.vue";
import VTooltip from "@/components/Tooltip/Tooltip.vue";
import { ref } from "vue";

const triggerEvent = ref('click');
</script>
