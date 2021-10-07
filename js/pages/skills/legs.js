const legsLayout = {
    template: `
    <div class="vertical-button-group">
        <button class="button is-primary is-rounded" @click="legs.current += .5">One Leg Deadlift</button>
        <button class="button is-primary is-rounded" @click="legs.current += 1">90&deg; Hip Nordic Curl</button>
        <button class="button is-primary is-rounded" @click="legs.current += 1.5">45&deg; Hip Nordic Curl</button>
        <button class="button is-info is-rounded" @click="legs.current += 5">Nordic Curl Negative</button>
        <button class="button is-info is-rounded" @click="legs.current += 5.5">Nordic Curl</button>
        <button class="button is-info is-rounded" @click="legs.current += 6.5">Nordic Curl Arms Overhead</button>
        <button class="button is-info is-rounded" @click="legs.current += 10">Tuck One Leg Nordic Curl</button>
        <button class="button is-warning is-rounded" @click="legs.current += 10">One Leg Nordic Curl</button>
    </div>
    `,
    methods: {
        incrementSkill() {
            
        }
    }
}