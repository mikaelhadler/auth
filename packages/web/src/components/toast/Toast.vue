<template>
  <div class="toast" :class="{ show: show }" role="alert">
    <div class="toast-header">
      <strong class="me-auto">{{ title }}</strong>
      <small class="text-muted">{{ age }}</small>
      <btn-close @click="closed = !closed" />
    </div>
    <div class="toast-body">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BtnClose from "@/components/btn/BtnClose.vue";

@Options({
  name: "Toast",
  components: {
    BtnClose,
  },
  props: {
    title: String,
    birthday: Date,
    message: String,
    duration: { type: Number, default: 20 },
  },
})
export default class Toast extends Vue {
  title!: string;
  birthday!: Date;
  message!: string;
  duration!: number;

  createdOn = new Date();
  now = new Date();
  closed = false;

  get show(): boolean {
    const time = this.createdOn.getTime();
    const validate = time + this.duration * 1000;
    const show = validate > this.now.getTime();
    console.log(show);
    return show && !this.closed;
  }

  get age(): string {
    const days = this.createdOn.getDate() - this.birthday.getDate();
    const hours = this.createdOn.getHours() - this.birthday.getHours();
    const minutes = this.createdOn.getMinutes() - this.birthday.getMinutes();

    if (days) {
      if (days === 1) {
        return "one day ago";
      }
      return `${days} days ago`;
    }
    if (hours) {
      if (hours === 1) {
        return "one hour ago";
      }
      return `${hours} hours ago`;
    }
    if (minutes) {
      if (minutes === 1) {
        return "one min ago";
      }
      return `${minutes} mins ago`;
    }
    return "just now";
  }

  mounted(): void {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
</script>

<style scoped></style>
