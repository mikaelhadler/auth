<template>
  <DataTable :items="items" :columns="columns">
    <template #actions="{ item }">
      <button class="btn btn-danger">{{ item }}</button>
    </template>
  </DataTable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DataTable from "@/components/data-table/DataTable.vue";
import { ColumnsConfig } from "../../components/data-table/protocols/data-table-utils";
import { AuthGroup } from "@auth/entity";

@Options({
  components: {
    DataTable,
  },
})
export default class AuthGroupList extends Vue {
  columns: ColumnsConfig<AuthGroup> = [
    { title: "#", key: "id" },
    { title: "Meu Titulo", key: "title" },
  ];

  get items(): Partial<AuthGroup>[] {
    return this.$store.state.authGroup.authGroupList;
  }

  mounted(): void {
    this.$store.dispatch("authGroup/listAuthGroup");
  }
}
</script>
