<template>
  <div>
    <Nuxt />
    <div
      class="modal_bg"
      :class="navActive && 'active'"
      @click="navBarOff()"
    ></div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api';
import { EventBus } from '@/utils/event-bus';
export default defineComponent({
  setup() {
    const navActive = ref(false);

    EventBus.$on('navBarState', state => {
      navActive.value = state;
    });

    const navBarOff = () => {
      navActive.value = false;
      EventBus.$emit('navBarOff', navActive.value);
    };

    return {
      navActive,
      navBarOff,
    };
  },
});
</script>
