const pullLayout = {
    template: `
    <div class="vertical-button-group">
        <button class="button is-primary is-rounded" @click="pull.current += .5">Scapular Shrug</button>
        <button class="button is-primary is-rounded" @click="pull.current += 1">Arch Hang</button>
        <button class="button is-primary is-rounded" @click="pull.current += 1.5">Pull up negative</button>
        <button class="button is-primary is-rounded" @click="pull.current += 5">Pull up</button>
        <button class="button is-primary is-rounded" @click="pull.current += 5.5">Kipping Pull up</button>
        <button class="button is-primary is-rounded" @click="pull.current += 6.5">Chest to Bar Pull up</button>
        <button class="button is-primary is-rounded" @click="pull.current += 10">Muscle Up Negative</button>
        <button class="button is-primary is-rounded" @click="pull.current += 10">Kipping Muscle Up</button>
        <button class="button is-info is-rounded" @click="pull.current += 10">Muscle Up</button>
        <button class="button is-info is-rounded" @click="pull.current += 10">Wide Muscle Up</button>
        <button class="button is-info is-rounded" @click="pull.current += 10">Strict Bar Muscle Up</button>
        <button class="button is-info is-rounded" @click="pull.current += 10">L-Sit Muscle Up</button>
        <button class="button is-warning is-rounded" @click="pull.current += 10">One Arm Straight Muscle Up</button>
    </div>
    `,
    methods: {
        incrementSkill() {
            
        }
    }
}