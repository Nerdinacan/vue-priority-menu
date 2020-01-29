// Adds debug flag and basic log functionality to all components

export const debuggingMixin = {
    props: {
        debug: { type: Boolean, required: false, default: false }
    },
    methods: {
        log() {
            if (this.debug) console.log(...arguments);
        },
        dir() {
            if (this.debug) console.dir(...arguments);
        },
        group() {
            if (this.debug) console.group(...arguments);
        },
        groupCollapsed() {
            if (this.debug) console.groupCollapsed(...arguments);
        },
        groupEnd() {
            if (this.debug) console.groupEnd(...arguments);
        }
    }
};

export const debugging = {
    install(Vue) {
        Vue.mixin(debuggingMixin);
    }
};
