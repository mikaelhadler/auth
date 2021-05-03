<template>
  <AuthGroupTable :items="items" :columns="columns" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DataTable from "@/components/data-table/DataTable.vue";
import { ColumnsConfig } from "../../components/data-table/protocols/data-table-utils";
import { AuthGroup as AuthGroupModel } from "@auth/entity";

class AuthGroupTable extends DataTable<AuthGroupModel> {}

@Options({
  components: {
    AuthGroupTable,
  },
})
export default class AuthGroupList extends Vue {
  columns: ColumnsConfig<AuthGroupModel> = [
    { title: "Meu Titulo", key: "title" },
    "activities",
  ];

  items: AuthGroupModel[] = [
    {
      id: "1-1-1-1",
      title: "system Admin",
      activities: [
        {
          name: "create user",
          permissions: ["read"],
        },
      ],
    },
  ];
}
</script>
