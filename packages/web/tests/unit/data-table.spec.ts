import { shallowMount } from "@vue/test-utils";
import DataTable from "@/components/data-table/DataTable.vue";

describe("DataTable.vue", () => {
  it.todo('smock tests');
  // it("renders props.headers and items values when passed", () => {
  //   const { wrapper, items, headers } = makeWrapper();
  //   expect(wrapper.text()).toMatch(headers[0].title);
  //   expect(wrapper.text()).toMatch(headers[1].title);
  //   expect(wrapper.text()).toMatch(items[0]["myKey"]);
  //   expect(wrapper.text()).toMatch(items[0]["myKey2"]);
  //   expect(wrapper.element).toMatchSnapshot();
  // });

  // it("renders items filtered when search not null", () => {
  //   const { wrapper, items, headers } = makeWrapper();
  //   wrapper.setData({ search: "fil" });
  //   expect(wrapper.text()).toMatch(headers[0].title);
  //   expect(wrapper.text()).toMatch(headers[1].title);
  //   expect(wrapper.text()).not.toMatch(items[0]["myKey"]);
  //   expect(wrapper.text()).not.toMatch(items[0]["myKey2"]);
  //   expect(wrapper.text()).toMatch(items[1]["myKey"]);
  //   expect(wrapper.text()).toMatch(items[1]["myKey2"]);
  //   expect(wrapper.element).toMatchSnapshot();
  // });
});

function makeWrapper() {
  const headers = makeHeaders();
  const items = makeItems();
  const wrapper = shallowMount(DataTable, {
    props: { headers, items },
  });

  return {
    headers,
    items,
    wrapper,
  };
}

type MyMockTest = {
  myKey: string;
  myKey2: string;
};

function makeItems(): MyMockTest[] {
  return [
    {
      myKey: "any-value",
      myKey2: "any-value-2",
    },
    {
      myKey: "filtered",
      myKey2: "filtered-2",
    },
  ];
}

interface HeaderDataTable {
  title: string;
  key: string;
}
function makeHeaders(): HeaderDataTable[] {
  return [
    {
      title: "Column Label",
      key: "myKey",
    },
    {
      title: "Column Label 2",
      key: "myKey2",
    },
  ];
}
