<template>
    <v-collapse v-model="activeItemsNames" accordion>
        <v-collapse-item name="item1">
            <template #title>
                <h1>title1</h1>
            </template>
            <h2>content1 title</h2>
            <div>content1</div>
        </v-collapse-item>
        <v-collapse-item name="item2" title="Consistency">
            <div>
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
            </div>
            <div>
                Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.
            </div>
        </v-collapse-item>
        <v-collapse-item name="item3" title="Feedback">
            <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
            </div>
            <div>
                Visual feedback: reflect current state by updating or rearranging
                elements of the page.
            </div>
        </v-collapse-item>
        <v-collapse-item name="item4" title="Efficiency">
            <div>
                Simplify the process: keep operating process simple and intuitive;
            </div>
            <div>
                Definite and clear: enunciate your intentions clearly so that the
                users can quickly understand and make decisions;
            </div>
            <div>
                Easy to identify: the interface should be straightforward, which helps
                the users to identify and frees them from memorizing and recalling.
            </div>
        </v-collapse-item>
        <v-collapse-item name="item5" title="Controllability">
            <div>
                Decision making: giving advices about operations is acceptable, but do
                not make decisions for the users;
            </div>
            <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
            </div>
        </v-collapse-item>
        <v-collapse-item name="item6" title="disabled" disabled>
        </v-collapse-item>
    </v-collapse>
</template>
<script setup>
import VCollapse from "@/components/Collapse/Collapse.vue";
import VCollapseItem from "@/components/Collapse/CollapseItem.vue";
import { ref } from "vue";

const activeItemsNames = ref([]);
</script>
