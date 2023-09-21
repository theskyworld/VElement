<!-- 指定延时效果的弹出提示 -->
<template>
    <v-tooltip content="hello tooltip" :openDelay="1000" :closeDelay="1000">
        <v-button type="primary">top</v-button>
    </v-tooltip>
</template>
<script setup>
import VButton from "@/components/Button/Button.vue";
import VTooltip from "@/components/Tooltip/Tooltip.vue";

</script>
