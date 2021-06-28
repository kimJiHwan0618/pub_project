<template>
  <nav :class="navActive && 'active'">
    <div class="nav__inner">
      <h1><img src="@/assets/img/logo_w.png" alt="h.WAVE logo" /></h1>
      <ul class="navigation">
        <li
          v-for="(list, index) in naviMenu"
          :key="list.name"
          :class="[
            list.toggle.value && 'on',
            list.activeLink.value && 'active',
          ]"
        >
          <a href="#" @click="navClick(index, list.name)" class="f-midium">{{
            list.name
          }}</a>
          <ul :class="'length' + list.subMenu.length">
            <li v-for="subList in list.subMenu" :key="subList.name">
              <nuxt-link :to="subList.link" class="f-midium">{{
                subList.name
              }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { EventBus } from '@/utils/event-bus';
export default defineComponent({
  setup() {
    const navActive = ref(false);

    EventBus.$on('navBarState', state => {
      navActive.value = state;
    });

    EventBus.$on('navBarOff', state => {
      navActive.value = state;
    });

    const naviMenu = [
      {
        activeLink: ref(false),
        name: 'Dashboards',
        subMenu: [{ name: 'Main', link: '/dashboard', route: 'dashboard' }],
        toggle: ref(false),
      },
      {
        activeLink: ref(false),
        name: 'Device',
        subMenu: [
          {
            name: 'Device Management',
            link: '/device/device-management',
            route: 'device-management',
          },
        ],
        toggle: ref(false),
      },
      {
        activeLink: ref(false),
        name: 'Shop',
        subMenu: [
          { name: 'Group', link: '#', route: '#' },
          { name: 'Registration', link: '#', route: '#' },
          { name: 'Errors', link: '#', route: '#' },
        ],
        toggle: ref(false),
      },
      {
        activeLink: ref(false),
        name: 'User',
        subMenu: [{ name: 'User Management', link: '#', route: '#' }],
        toggle: ref(false),
      },
      {
        activeLink: ref(false),
        name: 'Product',
        subMenu: [
          { name: 'License', link: '#', route: '#' },
          { name: 'HW ', link: '#', route: '#' },
        ],
        toggle: ref(false),
      },
      {
        activeLink: ref(false),
        name: 'Revenue',
        subMenu: [
          { name: 'Receipt', link: '#', route: '#' },
          { name: 'Statistic', link: '#', route: '#' },
        ],
        toggle: ref(false),
      },
      {
        activeLink: ref(false),
        name: 'System',
        subMenu: [
          { name: 'System Code', link: '#', route: '#' },
          { name: 'Message', link: '#', route: '#' },
          { name: 'Advanced settings', link: '#', route: '#' },
        ],
        toggle: ref(false),
      },
    ];

    const navClick = (index, name) => {
      naviMenu.map(nav => {
        if (nav.name === name) {
          naviMenu[index].toggle.value
            ? (naviMenu[index].toggle.value = false)
            : (naviMenu[index].toggle.value = true);
        } else {
          nav.toggle.value = false;
        }
      });
    };

    onMounted(() => {
      const pageRoute = location.href.split('/')[
        location.href.split('/').length - 1
      ];

      for (let i = 0; i < naviMenu.length; i++) {
        for (let z = 0; z < naviMenu[i].subMenu.length; z++) {
          naviMenu[i].subMenu[z].route === pageRoute &&
            (naviMenu[i].activeLink.value = true);
        }
      }
    });

    return {
      naviMenu,
      navClick,
      navActive,
    };
  },
});
</script>
