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
  template:
    '<my-button @onClick="onClick" v-bind="$props" >{{ label }}</my-button>'
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Test"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button"
// };
