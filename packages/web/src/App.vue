<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/sign-in">SignIn</router-link> |
    <router-link to="/auth-groups">AuthGroup</router-link>
  </div>
  <router-view />

  <toast-container />
</template>

<script lang="ts">
import ToastContainer from "@/components/toast/ToastContainer.vue";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    ToastContainer,
  },
})
export default class App extends Vue {}
</script>

<style src="./assets/base.css"></style>
