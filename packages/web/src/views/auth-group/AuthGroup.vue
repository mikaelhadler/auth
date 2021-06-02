<template>
  <div>{{ id }}</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"

export default class AuthGroup extends Vue {
  get id(): string | string[] {
    return this.$route.params.id
  }
}
</script>

<style scoped></style>
