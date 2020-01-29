
const Provide = {
    provide() {
        return { ...this.$attrs };
    },
    render() {
        const nodes = this.$slots.default || [];
        return nodes[0];
    }
};