<!-- 禁用的下拉菜单 -->
<template>
    <v-dropdown :menuOptions="menuOptions">
        <v-button type="primary">dropdown</v-button>
    </v-dropdown>
</template>
<script setup>
import VDropdown from "@/components/Dropdown/Dropdown.vue";
import VButton from "@/components/Button/Button.vue";
import { h } from 'vue';
const menuOptions = [
    {
        key: "1",
        label: "item1",
    },
    {
        key: "2",
        // 值为一个虚拟节点
        label: h("b", "this should be bold"),
        disabled: true
    },
    {
        key: "3",
        label: "item3",
        divided: true,
    },
    {
        key: "4",
        label: "item4",
    }
];
</script>
