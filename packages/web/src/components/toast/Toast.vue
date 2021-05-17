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
import CalcAgeUtil from "../../utils/methods/calc-age-util";

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
    return show && !this.closed;
  }

  get age(): string {
    const util = new CalcAgeUtil();
    util.age(this.createdOn, this.birthday);
    return util.age(this.createdOn, this.birthday);
  }

  mounted(): void {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
</script>

<style scoped></style>
