import { shallowMount } from "@vue/test-utils";
import Toast from "@/components/toast/Toast.vue";
import MockDate from 'mockdate';

describe("Toast.vue", () => {
  beforeAll(() => {
    MockDate.set(new Date('2021-05-16T12:00:00.000Z'))
  })
  afterAll(() => {
    MockDate.reset()
  })
  it("renders props values when passed", () => {
    const { wrapper } = makeWrapper();
    expect(wrapper.text()).toMatch('any_title');
    expect(wrapper.text()).toMatch('just now');
    expect(wrapper.text()).toMatch('any_message');
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders 'a minute ago' age", () => {
    const birthday = new Date('2021-05-16T11:59:00.000Z');
    const { wrapper } = makeWrapper(birthday);
    expect(wrapper.text()).toMatch('a minute ago');
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders '5 minutes ago' age", () => {
    const birthday = new Date('2021-05-16T11:55:00.000Z');
    const { wrapper } = makeWrapper(birthday);
    expect(wrapper.text()).toMatch('5 minutes ago');
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders 'a hour ago' age", () => {
    const birthday = new Date('2021-05-16T10:55:00.000Z');
    const { wrapper } = makeWrapper(birthday);
    expect(wrapper.text()).toMatch('a hour ago');
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders '7 hour ago' age", () => {
    const birthday = new Date('2021-05-16T04:55:00.000Z');
    const { wrapper } = makeWrapper(birthday);
    expect(wrapper.text()).toMatch('7 hours ago');
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders 'a day ago' age", () => {
    const birthday = new Date('2021-05-15T04:55:00.000Z');
    const { wrapper } = makeWrapper(birthday);
    expect(wrapper.text()).toMatch('a day ago');
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders '3 days ago' age", () => {
    const birthday = new Date('2021-05-13T04:55:00.000Z');
    const { wrapper } = makeWrapper(birthday);
    expect(wrapper.text()).toMatch('3 days ago');
    expect(wrapper.element).toMatchSnapshot();
  });
});

function makeWrapper(birthday:Date = new Date(), title:string = 'any_title', message:string ='any_message') {
  const wrapper = shallowMount(Toast, {
    props: {  title, birthday, message },
  });

  return {
    wrapper,
  };
}
