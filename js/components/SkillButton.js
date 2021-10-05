Vue.component('skill-button', {
    props: ['category', 'index', 'level', 'name', 'value', 'cost'],
    template: `
    <button class="button is-rounded" :class="level" @click="incrementSkill">{{ name }}</button>
    `,
    methods: {
        incrementSkill() {
            let payload = {
                category: this.category,
                index: this.index,
                value: this.value,
                cost: this.cost
            }
            this.$emit('increment-skill', payload)
        }
    }

})