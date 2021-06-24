<template>
  <div>
    <ul class="state__bar">
      <li>
        <dl>
          <dt>
            <span class="icon"></span>
            <span class="txt f-midium">Devices</span>
          </dt>
          <dd class="num f-bold">123</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <span class="icon"></span>
            <span class="txt f-midium">Shop</span>
          </dt>
          <dd class="num f-bold">123</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <span class="icon"></span>
            <span class="txt f-midium">Organizations</span>
          </dt>
          <dd class="num f-bold">123</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <span class="icon"></span>
            <span class="txt f-midium">Users</span>
          </dt>
          <dd class="num f-bold">123</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
