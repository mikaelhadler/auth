import { shallowMount } from "@vue/test-utils";
import DataTable from "@/components/data-table/DataTable.vue";
import { Headers } from "@/components/data-table/protocols/data-table-utils";

describe("DataTable.vue", () => {
  it("renders props.columns and items values when passed", () => {
    const { wrapper, items, columns } = makeWrapper();
    expect(wrapper.text()).toMatch(columns[0].title);
    expect(wrapper.text()).toMatch(columns[1].title);
    expect(wrapper.text()).toMatch(items[0]["id"]);
    expect(wrapper.text()).toMatch(items[0]["title"]);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders items filtered when search not null", async () => {
    const { wrapper, items } = makeWrapper();
    const inputSearch = wrapper.find('input[type="text"]')
    await inputSearch.setValue('any_title_2')
    
    const filterItems = items.filter(item => item.title.includes('any_title_2'))
    expect(wrapper.vm.filteredItems).toEqual(filterItems)
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders items filtered when search not null", async () => {
    const { wrapper, items } = makeWrapper();
    const inputSearch = wrapper.find('input[type="text"]')
    await inputSearch.setValue('any_title_2')
    
    const filterItems = items.filter(item => item.title.includes('any_title_2'))
    expect(wrapper.vm.filteredItems).toEqual(filterItems)
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders message on items filtered not found any items", async () => {
    const { wrapper, items } = makeWrapper();
    const inputSearch = wrapper.find('input[type="text"]')
    await inputSearch.setValue('any_title_3')
    
    expect(wrapper.text()).toMatch("Nenhum item encontrado para \"any_title_3\"!");
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders 'Nenhum item encontrado!' on empty items", async () => {
    const emptyItems:ModelTest[] = []
    const { wrapper, items } = makeWrapper(emptyItems);
    
    expect(wrapper.vm.filteredItems).toEqual(emptyItems)
    expect(wrapper.text()).toMatch("Nenhum item encontrado!");
    expect(wrapper.element).toMatchSnapshot();
  });
});

function makeWrapper(items: ModelTest[] = makeItems()) {
  const columns = makeColumns();
  const wrapper = shallowMount(DataTable, {
    props: { columns, items },
  });

  return {
    columns,
    items,
    wrapper,
  };
}

type ModelTest = {
  id: string;
  title: string;
}

function makeColumns():Headers<ModelTest>[]{
  return [
    { title: "#", key: "id" },
    { title: "My Title", key: "title" },
  ];
}

function makeItems():ModelTest[] {
  return [
    { 
      id: 'any_id',
      title: 'any_title'
    },
    { 
      id: 'any_id_1',
      title: 'any_title_1'
    },
    { 
      id: 'any_id_2',
      title: 'any_title_2'
    }
  ]
}