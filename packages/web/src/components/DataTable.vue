<template>
  <div class="form-floating mx-3 mt-3">
    <input
      id="search"
      class="form-control"
      type="text"
      placeholder="Search"
      v-model="search"
    />
    <label for="search">Search</label>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col" v-for="(header, index) in headers" :key="index">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in filterdItems" :key="index">
        <td v-for="(header, index) in headers" :key="index">
          {{ item[header.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

interface IHeaders<T> {
  title: string;
  key: keyof T;
}

@Options({
  name: "DataTable",
  props: {
    items: { type: Array, required: true },
    headers: { type: Array, required: true },
  },
})
export default class DataTable<T> extends Vue {
  items!: Array<T>;
  headers!: IHeaders<T>[];

  search = "";

  get filterdItems(): T[] {
    return this.items.filter((item) =>
      this.headers.some((header) =>
        item[header.key]
          .toString()
          .toUpperCase()
          .includes(this.search.toLocaleUpperCase())
      )
    );
  }
}
</script>
