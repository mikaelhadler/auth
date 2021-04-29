<template>
  <AuthGroupTable :headers="headers" :items="items" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DataTable from "@/components/DataTable.vue";

interface AuthGroupModel {
  id: number;
  first: string;
  second: string;
  nick: string;
}
class AuthGroupTable extends DataTable<AuthGroupModel> {}

@Options({
  components: {
    AuthGroupTable,
  },
})
export default class AuthGroup extends Vue {
  headers = [
    {
      title: "Id",
      key: "id",
    },
    {
      title: "First",
      key: "first",
    },
    {
      title: "Second",
      key: "second",
    },
    {
      title: "Nick",
      key: "nick",
    },
  ];

  items = [
    {
      id: 1,
      first: "Adriano",
      second: "Reis",
      nick: "@adrianoreis",
    },
    {
      id: 2,
      first: "John",
      second: "King",
      nick: "@johnking",
    },
    {
      id: 3,
      first: "Gary",
      second: "Esponja",
      nick: "@garyesponja",
    },
    {
      id: 4,
      first: "Boby",
      second: "din",
      nick: "@bobydin",
    },
  ];
}
</script>
