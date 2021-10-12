<template>
  <div class="tabs is-centered is-boxed">
    <ul style="border-bottom: 1px solid #dbdbdb">
      <router-link
        to="/skills/push"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li :class="[isActive && 'is-active']">
          <a :href="href" @click="navigate">Push</a>
        </li>
      </router-link>
      <router-link
        to="/skills/pull"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li :class="[isActive && 'is-active']">
          <a :href="href" @click="navigate">Pull</a>
        </li>
      </router-link>
      <router-link
        to="/skills/legs"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li :class="[isActive && 'is-active']">
          <a :href="href" @click="navigate">Legs</a>
        </li>
      </router-link>
      <router-link
        to="/skills/core"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li :class="[isActive && 'is-active']">
          <a :href="href" @click="navigate">Core</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>
