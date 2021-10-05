new Vue({
    el: '#root',
    data: {
        push: {
            current: 0,
            capacity: 15,
            skills: [{
                difficulty: 0,
                name: 'Incline Push Up',
                skillPerClick: 0.5,
                costPerClick: 10
            },{

            }]
        },
        pull: {

        },
        core: {

        },
        legs: {

        }
    },
    methods: {
        fatigueClass(val) {
            switch (true) {
                case val <= 50:
                    return { 'is-success': true }
                case val <= 75:
                    return { 'is-warning': true }
                case val < 100:
                    return 'is-danger'
                default:
                    return ''
            }
        }
    }
})