const coreLayout = {
    template: `
    <div class="vertical-button-group">
        <button class="button is-primary is-rounded" @click="core.current += .5">Plank</button>
        <button class="button is-primary is-rounded" @click="core.current += 1">One Arm Plank</button>
        <button class="button is-primary is-rounded" @click="core.current += 1.5">One Arm One Leg Plank</button>
        <button class="button is-info is-rounded" @click="core.current += 5">Ring Ab Rollout</button>
        <button class="button is-info is-rounded" @click="core.current += 5.5">Kneeling Ab Wheel</button>
        <button class="button is-info is-rounded" @click="core.current += 6.5">Straight Leg Ab Wheel Ramp</button>
        <button class="button is-info is-rounded" @click="core.current += 10">Straight Leg Ab Wheel Negative</button>
        <button class="button is-info is-rounded" @click="core.current += 10">Straight Leg Ab Wheel</button>
        <button class="button is-warning is-rounded" @click="core.current += 10">Weighted Ab Wheel</button>
        <button class="button is-warning is-rounded" @click="core.current += 10">One Arm Ab Wheel</button>
    </div>
    `,
    methods: {
        incrementSkill() {
            
        }
    }
}