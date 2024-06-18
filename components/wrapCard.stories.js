{/*import { Text, View } from 'react-native';
import Stack from "./wrapCard"

export default {
  title: "Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: 50, 
          height: 50,
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        key= {n}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 2, 
  wrap: false,
}*/}