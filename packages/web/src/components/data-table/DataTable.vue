<template>
  <div class="row">
    <div class="col">
      <div class="form-floating mx-3 mt-3">
        <InputSearch v-model:search="search" />
      </div>
    </div>
    <div class="col d-flex justify-content-end">
      <div>button</div>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col" v-for="(header, index) in headers" :key="index">
          {{ header.title }}
        </th>
        <th v-if="hasActions">actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in filteredItems" :key="index">
        <td v-for="(header, index) in headers" :key="index">
          <span v-if="editable && index === 0">
            <router-link :to="`${currentRouter}/${item[header.key]}`">
              {{ item[header.key] }}
            </router-link>
          </span>
          <span v-else>
            {{ item[header.key] }}
          </span>
        </td>
        <td v-if="hasActions">
          <slot name="actions" :item="item">
            <BtnRemove v-if="removable" @click="remove(item)" />
          </slot>
        </td>
      </tr>
      <tr v-if="notItems">
        <td class="text-center text-nowrap text-muted">
          <span v-if="search">Nenhum item encontrado para "{{ search }}"!</span>
          <span v-else>Nenhum item encontrado!</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { ItemModel, Headers, ColumnsConfig } from "./protocols/data-table-utils"
import InputSearch from "@/components/form/InputSearch.vue"
import BtnRemove from "@/components/btn/BtnRemove.vue"

@Options({
  name: "DataTable",
  components: {
    InputSearch,
    BtnRemove
  },
  props: {
    items: { type: Array, required: true },
    columns: { type: Array, required: true },
    editable: { type: Boolean },
    removable: { type: Boolean }
  },
  emits: ["remove-item"]
})
export default class DataTable<T extends ItemModel> extends Vue {
  items!: Array<T>
  columns!: ColumnsConfig<T>
  editable!: boolean
  removable!: boolean

  search = ""
  get headers(): Headers<T>[] {
    return this.columns.map((column): Headers<T> => {
      if (typeof column === "string") {
        return {
          title: column,
          key: column
        }
      }
      if (typeof column === "object") {
        return {
          title: column.title,
          key: column.key
        }
      }
    })
  }

  get notItems(): boolean {
    return !this.filteredItems.length
  }

  get hasActions(): boolean {
    return !!this.$slots.actions || this.removable
  }

  get filteredItems(): T[] {
    if (!this.search) return this.items
    return this.items.filter((item) =>
      this.headers.some((header) =>
        item[header.key]
          .toString()
          .toUpperCase()
          .includes(this.search.toLocaleUpperCase())
      )
    )
  }

  get currentRouter(): string {
    return this.$route.fullPath
  }

  remove(item: T): void {
    this.$emit("remove-item", item)
  }
}
</script>
