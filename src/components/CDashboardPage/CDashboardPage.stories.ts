import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, ref } from 'vue';
import type { DropdownOption } from 'naive-ui/es/dropdown/src/interface';
import CDashboardHeader from '../CDashboardHeader/CDashboardHeader.vue';
import CBreadcrumb from '../CBreadcrumb/CBreadcrumb.vue';
import CBreadcrumbItem from '../CBreadcrumbItem/CBreadcrumbItem.vue';
import CDashboardLayout from '../CDashboardLayout/CDashboardLayout.vue';
import CDashboardPage from './CDashboardPage.vue';
import CTile from '../CTile/CTile.vue';
import CIcon from '../CIcon/CIcon.vue';
import CDashboardSidebar from '../CDashboardSidebar/CDashboardSidebar.vue';
import CDashboardMenu from '../CDashboardMenu/CDashboardMenu.vue';
import { type DashboardMenuGroup, DashboardMenuItemType } from '../../types';

const meta: Meta<typeof CDashboardPage> = {
  title: 'Components/Dashboard/DashboardPage',
  component: CDashboardPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The DashboardPage is a simple layout component that should be used inside main content slot of DashboardLayout. It provides the indents.',
      },
    },
    layout: 'fullscreen',
  },
  render: (args) => ({
    components: {
      CDashboardLayout,
      CDashboardHeader,
      CIcon,
      CDashboardSidebar,
      CDashboardMenu,
      CDashboardPage,
      CBreadcrumb,
      CBreadcrumbItem,
      CTile,
    },
    setup() {
      const activeItem = ref('ExpOption2');

      function handleOptionSelect(value: string) {
        activeItem.value = value;
      }

      const sideMenuItems = computed<DashboardMenuGroup[]>(() => [
        {
          key: 'HOME',
          children: [
            {
              key: 'HomePage',
              title: 'Home',
              type: DashboardMenuItemType.LINK,
              iconName: 'home',
              to: '/',
              isHidden: false,
              isActive: activeItem.value === 'HomePage',
            },
          ],
        },

        {
          key: 'GROUP_1',
          title: 'Group 1',
          isHidden: false,
          children: [
            {
              key: 'ExpandableBlock',
              title: 'Expandable',
              type: DashboardMenuItemType.BUTTON,
              iconName: 'search',
              isHidden: false,
              isActive: activeItem.value === 'ExpOption1' || activeItem.value === 'ExpOption2',
              children: [
                {
                  key: 'ExpOption1',
                  title: 'Subitem 1',
                  type: DashboardMenuItemType.LINK,
                  to: '/',
                  isHidden: false,
                  isActive: activeItem.value === 'ExpOption1',
                },
                {
                  key: 'ExpOption2',
                  title: 'Subitem 2',
                  type: DashboardMenuItemType.LINK,
                  to: '/',
                  isHidden: false,
                  isActive: activeItem.value === 'ExpOption2',
                },
              ],
            },
            {
              key: 'G1Item2',
              title: 'Item 2',
              type: DashboardMenuItemType.LINK,
              iconName: 'key',
              to: '/',
              isHidden: false,
              isActive: activeItem.value === 'G1Item2',
            },
            {
              key: 'G1Item3',
              title: 'Item 3',
              type: DashboardMenuItemType.LINK,
              iconName: 'briefcase',
              to: '/',
              isHidden: false,
              isActive: activeItem.value === 'G1Item3',
            },
          ],
        },

        {
          key: 'GROUP_2',
          title: 'Group 2',
          isHidden: false,
          children: [
            {
              key: 'G2Item1',
              title: 'Item 1',
              type: DashboardMenuItemType.LINK,
              iconName: 'calendar',
              to: '/',
              isHidden: false,
              isActive: activeItem.value === 'G2Item1',
            },
            {
              key: 'G2Item2',
              title: 'Item 2',
              type: DashboardMenuItemType.LINK,
              iconName: 'documents',
              to: '/',
              isHidden: false,
              isActive: activeItem.value === 'G2Item2',
            },
          ],
        },
      ]);

      const userMenuOptions = computed<DropdownOption[]>(() => [
        {
          label: 'Settings',
          key: 'SETTINGS',
        },
        {
          label: 'Logout',
          key: 'LOGOUT',
        },
      ]);

      return {
        args, activeItem, userMenuOptions, sideMenuItems, handleOptionSelect,
      };
    },
    template: `
      <CDashboardLayout :has-side-menu="args.hasSideMenu">
        <template #header>
          <CDashboardHeader
            user-name="ricky.gervais"
            :options="userMenuOptions"
            :has-side-menu="args.hasSideMenu"
          >
            <template #start>
              <div style="display: flex; align-items: center; gap: 8px;">
                <CIcon
                  :is-inline="true"
                  name="eye"
                  style="width: 40px; height: 40px; color: var(--primary-color);"
                />
                <span
                  class="logo__text" 
                  style="font-size: 24px; font-family: 'NeueMachina';"
                >Project</span>
              </div>
            </template>
          </CDashboardHeader>
        </template>

        <template #sidebar>
          <CDashboardSidebar>
            <CDashboardMenu 
              :items="sideMenuItems" 
              @select="handleOptionSelect"
            />
          </CDashboardSidebar>
        </template>

        <main>
          <CDashboardPage :has-side-menu="args.hasSideMenu">
            <template 
              v-if="activeItem !== 'HomePage'"
              #breadcrumbs>
              <CBreadcrumb>
                <CBreadcrumbItem to="/" @click="() => handleOptionSelect('HomePage')">
                  Home
                </CBreadcrumbItem>
                <CBreadcrumbItem :is-active="true">
                  {{ activeItem }}
                </CBreadcrumbItem>
              </CBreadcrumb>
            </template>
            
            <template #title>
              {{ activeItem }} page title
            </template>

            <div class="content">
              <CTile style="height: 400px; margin-bottom: 12px;">
                <template #title>Content Block 1</template>

                <CTile style="height: 100%; background: var(--text-color-3); opacity: 0.1;">
                </CTile>
              </CTile>

              <CTile style="height: 400px">
                <template #title>Content Block 2</template>

                <CTile style="height: 100%; background: var(--text-color-3); opacity: 0.1;">
                </CTile>
              </CTile>
            </div>
          </CDashboardPage>
        </main>
      </CDashboardLayout>
    `,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasSideMenu: true,
  },
};
