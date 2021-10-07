const pushLayout = {
    template: `
    <div class="vertical-button-group">
    <button class="button is-primary is-rounded" @click="push.current += .5">Incline Push Up</button>
    <button class="button is-primary is-rounded" @click="push.current += 1">Push Up</button>
    <button class="button is-primary is-rounded" @click="push.current += 1.5">Diamond Push Up</button>
    <button class="button is-info is-rounded" @click="push.current += 5">Incline One Arm Push Up</button>
    <button class="button is-warning is-rounded" @click="push.current += 5.5">Ring One Arm Push Up</button>
    <button class="button is-warning is-rounded" @click="push.current += 6.5">Ring Wall Maltese Push Up</button>
    <button class="button is-danger is-rounded" @click="push.current += 10">Ring Planche Push Up</button>
    <skill-button category="push"
        index="0"
        level="is-primary" 
        name="Incline Push Up" 
        value="0.5" 
        cost="10"
        @increment-skill="incrementSkill"></skill-button>
    </div>
    `,
    methods: {
        incrementSkill() {
            
        }
    }
}