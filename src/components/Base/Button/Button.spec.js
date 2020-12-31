import { shallowMount, createLocalVue } from "@vue/test-utils";
import Button from "./Button.vue";

const localVue = createLocalVue();

describe("Button", () => {
  test("...renders with defaults", () => {
    const wrapper = shallowMount(Button, {
      localVue
    });
    expect(wrapper).toMatchSnapshot();
  });
});
