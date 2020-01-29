<template>
    <div id="app">
        <dataset-menu />
    </div>
</template>

<script>
import DatasetMenu from "./components/DatasetMenu";

export default {
    name: 'app',
    components: { DatasetMenu },
    data() {
        return {
            showTempButtons: false
        }
    },
    methods: {
        log() {
            console.log(...arguments);
        }
    }
}
</script>

<style>
#app {
    background-color: lightblue; position:relative;
    padding: 20px;
}
.hole {
    background-color: white;
    margin: 100 100 0 100;
}
.hid:after {
    content: ":";
}
</style>



<!-- <b-dropdown-item v-if="isOverflow" menu-key="downloads">
    <i class="fa fa-calendar mr-1" />
    <span>Downloadxorrz</span>
</b-dropdown-item> -->

<!-- <b-dropdown-item v-if="isOverflow" menu-key="downloads">
    <b-dropdown-group header="Downloads">
        <b-dropdown-item>First Grouped item</b-dropdown-item>
        <b-dropdown-item>Second Grouped Item</b-dropdown-item>
    </b-dropdown-group>
</b-dropdown-item>

<b-button v-else menu-key="downloads"
    size="sm"
    variant="link"
    class="p-1"
    v-b-tooltip
    title="Downloads n shit">
    <i class="fa fa-calendar" />
    <span class="sr-only">Downloadxorrz</span>
</b-button> -->

<!-- <b-dropdown v-else menu-key="downloads"
    no-caret right variant="link" size="sm" toggle-class="p-1">
    <template #button-content>
        <slot name="button-content">
            <i class="fa fa-calendar" />
            <span class="sr-only">Downloads</span>
        </slot>
    </template>
    <b-dropdown-item>Download Dataset</b-dropdown-item>
    <b-dropdown-item>Download Dataset</b-dropdown-item>
    <b-dropdown-item>Download Dataset</b-dropdown-item>
</b-dropdown> -->

<!-- <priority-menu-item v-for="i in 5" :key="'menu_' + i"
    icon="fa fa-clock"
    :title="'Menu_'+i"
    @click="log('click', i)" /> -->

