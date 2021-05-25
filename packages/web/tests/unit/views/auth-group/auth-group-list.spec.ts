import { shallowMount, flushPromises } from "@vue/test-utils";
import AuthGroupList from "@/views/auth-group/AuthGroupList.vue";
import { createStore } from "vuex";
import authGroup from "@/store/views/auth-group";

const store = createStore({
  modules: {
    authGroup,
  },
});

describe("AuthGroupList.Vue", () => {
  it("should render auth-group-list on DataTable component", async () => {
    const wrapper = shallowMount(AuthGroupList, {
      global: {
        plugins: [store],
      },
    });
    await flushPromises();
    expect(wrapper.element).toMatchSnapshot();
  });
});
