import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  staticDirs: [{from: '../src/assets', to: '/assets'}],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    disableWhatsNewNotifications: true,
  },
};

export default config;