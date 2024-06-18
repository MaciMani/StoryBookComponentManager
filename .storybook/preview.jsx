import { View } from "react-native";
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    backgrounds: {
      default: 'warm',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' },
      ],
    },
  },

  decorators: [
    withBackgrounds,
    (Story) => (
      <View style={{ flex: 1, color: 'blue' }}>
        <Story />
      </View>
    ),
  ],
};

export default preview;
