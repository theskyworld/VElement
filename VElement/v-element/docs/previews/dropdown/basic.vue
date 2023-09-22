<!-- 基础下拉菜单 -->
<template>
    <v-dropdown :menuOptions="menuOptions">
        <v-button type="primary">dropdown</v-button>
    </v-dropdown>
</template>
<script setup>
import VDropdown from "@/components/Dropdown/Dropdown.vue";
import VButton from "@/components/Button/Button.vue";

const menuOptions = [
    {
        key: "1",
        label: "这是第一条内容",
    },
    {
        key: "2",
        label: "这是第二条内容",
        divided: true,
    },
    {
        key: "3",
        label: "这是第三条内容",
    }
];
</script>
