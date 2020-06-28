<template>
    <div>
        <input v-model="textval" />
        <button @click="() => counter++">Increment</button>
        <button @click="() => counter--">Decrement</button>
        <button @click="() => nonsense = !nonsense">Toggle Prop not on component</button>

        <PriorityMenu :starting-height="20">

            <PriorityMenuItem v-for="(n,i) in counter" :key="'before_' + i"
                :title="makeTitle(n, textval, counter)"
                :pressed="nonsense"
                icon="fa fa-check"
                @click="say(n)" />

            <button key="plain-button" :title="makeTitle(textval, 'plain button')"
                @click="say('plain button')">
                Plain Button
            </button>

            <b-button key="bootstrap-button" :title="makeTitle(textval, 'bootstrap button')"
                @click="say('bootstrap button')">
                Bootstrap Button
            </b-button>

            <button title="static title" key="stattic-button"
                @click="say('static title button')">
                Static title Button
            </button>

            <PriorityMenuItem v-for="(n,i) in counter" :key="'after_' + i"
                :title="makeTitle(n, textval, counter)"
                :pressed="nonsense"
                icon="fa fa-check"
                @click="say(n)" />

        </PriorityMenu>
    </div>
</template>

<script>
import { PriorityMenuItem, PriorityMenu } from "./PriorityMenu";

export default {
    components: {
        PriorityMenu,
        PriorityMenuItem
    },
    data() {
        return {
            showTempButtons: true,
            counter: 1,
            nonsense: true,
            textval: "Button"
        }
    },
    watch: {
        showTempButtons(newVal) {
            console.log("showTempButtons", newVal);
        }
    },
    methods: {
        say(val) {
            console.log('clicked!', val);
        },
        makeTitle(...args) {
            return args.join(",");
        }
    }
}
</script>