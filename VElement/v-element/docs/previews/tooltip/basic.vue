<!-- 基础的弹出提示 -->
<template>
    <v-tooltip style="width: 50px; height: 50px" content="hello tooltip">
        <v-button type="primary">hello</v-button>
    </v-tooltip>
</template>
<script setup>
import VButton from "@/components/Button/Button.vue";
import VTooltip from "@/components/Tooltip/Tooltip.vue";
</script>
