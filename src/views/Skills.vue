<template>
  <div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'push'">
      <button class="button is-primary is-rounded" @click="push.current += 0.5">
        Incline Push Up
      </button>
      <button class="button is-primary is-rounded" @click="push.current += 1">
        Push Up
      </button>
      <button class="button is-primary is-rounded" @click="push.current += 1.5">
        Diamond Push Up
      </button>
      <button class="button is-info is-rounded" @click="push.current += 5">
        Incline One Arm Push Up
      </button>
      <button class="button is-warning is-rounded" @click="push.current += 5.5">
        Ring One Arm Push Up
      </button>
      <button class="button is-warning is-rounded" @click="push.current += 6.5">
        Ring Wall Maltese Push Up
      </button>
      <button class="button is-danger is-rounded" @click="push.current += 10">
        Ring Planche Push Up
      </button>
      <skill-button
        category="push"
        index="0"
        level="is-primary"
        name="Incline Push Up"
        value="0.5"
        cost="10"
        @increment-skill="incrementSkill"
      ></skill-button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'pull'">
      <button class="button is-primary is-rounded" @click="pull.current += 0.5">
        Scapular Shrug
      </button>
      <button class="button is-primary is-rounded" @click="pull.current += 1">
        Arch Hang
      </button>
      <button class="button is-primary is-rounded" @click="pull.current += 1.5">
        Pull up negative
      </button>
      <button class="button is-primary is-rounded" @click="pull.current += 5">
        Pull up
      </button>
      <button class="button is-primary is-rounded" @click="pull.current += 5.5">
        Kipping Pull up
      </button>
      <button class="button is-primary is-rounded" @click="pull.current += 6.5">
        Chest to Bar Pull up
      </button>
      <button class="button is-primary is-rounded" @click="pull.current += 10">
        Muscle Up Negative
      </button>
      <button class="button is-primary is-rounded" @click="pull.current += 10">
        Kipping Muscle Up
      </button>
      <button class="button is-info is-rounded" @click="pull.current += 10">
        Muscle Up
      </button>
      <button class="button is-info is-rounded" @click="pull.current += 10">
        Wide Muscle Up
      </button>
      <button class="button is-info is-rounded" @click="pull.current += 10">
        Strict Bar Muscle Up
      </button>
      <button class="button is-info is-rounded" @click="pull.current += 10">
        L-Sit Muscle Up
      </button>
      <button class="button is-warning is-rounded" @click="pull.current += 10">
        One Arm Straight Muscle Up
      </button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'legs'">
      <button class="button is-primary is-rounded" @click="legs.current += 0.5">
        One Leg Deadlift
      </button>
      <button class="button is-primary is-rounded" @click="legs.current += 1">
        90&deg; Hip Nordic Curl
      </button>
      <button class="button is-primary is-rounded" @click="legs.current += 1.5">
        45&deg; Hip Nordic Curl
      </button>
      <button class="button is-info is-rounded" @click="legs.current += 5">
        Nordic Curl Negative
      </button>
      <button class="button is-info is-rounded" @click="legs.current += 5.5">
        Nordic Curl
      </button>
      <button class="button is-info is-rounded" @click="legs.current += 6.5">
        Nordic Curl Arms Overhead
      </button>
      <button class="button is-info is-rounded" @click="legs.current += 10">
        Tuck One Leg Nordic Curl
      </button>
      <button class="button is-warning is-rounded" @click="legs.current += 10">
        One Leg Nordic Curl
      </button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'core'">
      <button class="button is-primary is-rounded" @click="core.current += 0.5">
        Plank
      </button>
      <button class="button is-primary is-rounded" @click="core.current += 1">
        One Arm Plank
      </button>
      <button class="button is-primary is-rounded" @click="core.current += 1.5">
        One Arm One Leg Plank
      </button>
      <button class="button is-info is-rounded" @click="core.current += 5">
        Ring Ab Rollout
      </button>
      <button class="button is-info is-rounded" @click="core.current += 5.5">
        Kneeling Ab Wheel
      </button>
      <button class="button is-info is-rounded" @click="core.current += 6.5">
        Straight Leg Ab Wheel Ramp
      </button>
      <button class="button is-info is-rounded" @click="core.current += 10">
        Straight Leg Ab Wheel Negative
      </button>
      <button class="button is-info is-rounded" @click="core.current += 10">
        Straight Leg Ab Wheel
      </button>
      <button class="button is-warning is-rounded" @click="core.current += 10">
        Weighted Ab Wheel
      </button>
      <button class="button is-warning is-rounded" @click="core.current += 10">
        One Arm Ab Wheel
      </button>
    </div>
  </div>
</template>

<script>
import skillButton from "../components/SkillButton.vue";

export default {
  components: {
    skillButton,
  },
  methods: {
    incrementSkill() {
      alert("increment");
    },
  },
};
</script>
