<template>
  <div class="tabs is-centered is-boxed">
    <ul style="border-bottom: 1px solid #dbdbdb">
      <router-link
        :to="`/skills/${skill}`"
        v-slot="{ href, navigate, isActive }"
        custom
        v-for="(skill, index) in skills"
        :key="index"
      >
        <li :class="[isActive && 'is-active']">
          <a :href="href" @click="navigate" v-text="skill"></a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["skills"],
};
</script>

<style scoped>
a {
  text-transform: capitalize;
}
</style>
