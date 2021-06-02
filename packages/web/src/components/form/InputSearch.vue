<template>
  <div>
    <input
      id="search"
      class="form-control"
      type="text"
      placeholder="Search"
      @input="$emit('update:search', $event.target.value)"
    />
    <label for="search">Search</label>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"

@Options({
  name: "InputSearch",
  props: ["search"],
  emits: ["update:search"]
})
export default class InputSearch extends Vue {}
</script>
