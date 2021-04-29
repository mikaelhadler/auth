<template>
  <Sampletable :items="items" :headers="headers" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DataTable from "@/components/DataTable.vue";

interface IItems {
  nome: string;
  sobrenome: string;
  telefone: string;
  cpf: number;
}
class Sampletable extends DataTable<IItems> {}

@Options({
  components: {
    Sampletable,
  },
})
export default class Home extends Vue {
  items = [
    {
      nome: "Adriano",
      sobrenome: "Reis",
      telefone: "(27)9 9846-0117",
      cpf: 123456,
    },
    {
      nome: "Polania",
      sobrenome: "Pancine",
      telefone: "(27)9 9806-1007",
      cpf: 123456,
    },
    {
      nome: "Alexandre",
      sobrenome: "Pancine dos Reis",
      telefone: "(27) -",
      cpf: 123456,
    },
  ];

  headers = [
    {
      key: "nome",
      title: "Nome",
    },
    {
      key: "sobrenome",
      title: "Sobrenome",
    },
    {
      key: "telefone",
      title: "Telefone",
    },
  ];
}
</script>
