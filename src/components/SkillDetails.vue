<template>
  <div>
    <h3 class="title is-5">{{ category | ucCase }}</h3>
    <dl>
      <div>
        <dt>Max Skill</dt>
        <dd>
          <code>{{ skill }}</code>
        </dd>
      </div>
      <div>
        <dt>Total Points</dt>
        <dd>
          <code>{{ points }}</code>
        </dd>
      </div>
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
