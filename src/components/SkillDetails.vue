<template>
  <div>
    <h3 class="title is-5">{{ category | ucCase }}</h3>
    <dl>
      <dt>Max Skill</dt>
      <dd>
        <code>{{ skill }}</code>
      </dd>
      <dt>Total Points</dt>
      <dd>
        <code>{{ points }}</code>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["category", "skill", "points"],
  filters: {
    ucCase(msg) {
      return msg.charAt(0).toUpperCase() + msg.slice(1);
    },
  },
};
</script>
