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
import {
  ItemModel,
  Headers,
  ColumnsConfig,
} from "./protocols/data-table-utils";

@Options({
  name: "DataTable",
  props: {
    items: { type: Array, required: true },
    columns: { type: Array, required: true },
  },
})
export default class DataTable<T extends ItemModel> extends Vue {
  items!: Array<T>;
  columns!: ColumnsConfig<T>;

  search = "";
  get headers(): Headers<T>[] {
    return this.columns.map(
      (column): Headers<T> => {
        if (typeof column === "string") {
          return {
            title: column,
            key: column,
          };
        }
        if (typeof column === "object") {
          return {
            title: column.title,
            key: column.key,
          };
        }
      }
    );
  }

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
