<template>
  <div class="page">
    <Header />
    <Navigation />
    <div class="page__wrap">
      <div class="page__wrap__inner">
        <h2 class="f-midium page__title">Device Management</h2>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import Header from '@/pages/layout/header.vue';
import Navigation from '@/pages/layout/nav.vue';
export default defineComponent({
  components: {
    Header,
    Navigation,
  },
  setup() {
    return {};
  },
});
</script>
