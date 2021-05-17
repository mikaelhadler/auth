<template>
  <div
    class="toast-container position-fixed bottom-0 end-0 p-3"
    style="z-index: 5"
  >
    <toast
      v-for="index of 2"
      :key="index"
      title="Bootstrap"
      message="See? Just like this."
      :birthday="createdOn"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Toast from "@/components/toast/Toast.vue";

@Options({
  name: "ToastContainer",
  components: {
    Toast,
  },
})
export default class ToastContainer extends Vue {
  createdOn = new Date("2021-05-16T18:15:28.419Z");
}
</script>

<style scoped></style>
