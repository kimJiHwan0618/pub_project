<template>
  <div>
    <Header />
    <Navigation />
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
