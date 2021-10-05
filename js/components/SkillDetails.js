Vue.component('skill-details', {
    props: ['category', 'skill', 'points'],
    template: `
    <div>
        <h3 class="title is-5">{{ category | ucCase }}</h3>
        <dl>
            <dt>Max Skill</dt>
            <dd><code>{{ skill }}</code></dd>
            <dt>Total Points</dt>
            <dd><code>{{ points }}</code></dd>
        </dl>
    </div>
    `,
    filters: {
        ucCase(msg) {
            return msg.charAt(0).toUpperCase() + msg.slice(1)
        }
    }
})