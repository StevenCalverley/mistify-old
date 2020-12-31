import MyButton from "./Button.vue";

export default {
  title: "Base/Button",
  component: MyButton
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   size: { control: { type: "select", options: ["small", "medium", "large"] } }
  // }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" >Primary</my-button>'
});

export const Primary = Template.bind({});
Primary.args = {};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button"
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button"
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button"
// };
