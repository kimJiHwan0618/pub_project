<template>
  <nav>
    <h1><img src="@/assets/img/logo_w.png" alt="h.WAVE logo" /></h1>
    <ul class="navigation">
      <li v-for="(list, index) in naviMenu" :key="list.name">
        <a href="#" class="f-midium">{{ list.name }}</a>
        <ul>
          <li v-for="subList in list.subMenu" :key="subList.name">
            <nuxt-link :to="subList.link" class="f-midium">{{
              subList.name
            }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api';
export default defineComponent({
  setup() {
    const naviMenu = [
      { name: 'Dashboards', subMenu: '' },
      { name: 'Device', subMenu: [{ name: 'Device Management', link: '#' }] },
      {
        name: 'Shop',
        subMenu: [
          { name: 'Group', link: '#' },
          { name: 'Registration', link: '#' },
          { name: 'Errors', link: '#' },
        ],
      },
      { name: 'User', subMenu: [{ name: 'User Management', link: '#' }] },
      {
        name: 'Product',
        subMenu: [
          { name: 'License', link: '#' },
          { name: 'HW ', link: '#' },
        ],
      },
      {
        name: 'Revenue',
        subMenu: [
          { name: 'Receipt', link: '#' },
          { name: 'Statistic', link: '#' },
        ],
      },
      {
        name: 'System',
        subMenu: [
          { name: 'System Code', link: '#' },
          { name: 'Message', link: '#' },
          { name: 'Advanced settings', link: '#' },
        ],
      },
    ];

    onMounted(() => {});

    return {
      naviMenu,
    };
  },
});
</script>
