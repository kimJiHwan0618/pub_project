<template>
  <div class="daily__sales__wrap">
    <div class="chart__div daily__sales">
      <h3 class="f-midium">Daily Sales</h3>
      <div class="chart">
        <Bar :data="testData" />
        <ul class="chart__list">
          <li>
            <dl>
              <dt>Total Sales</dt>
              <dd class="f-midium">
                <span class="num">LAK 190,000</span>
                <span class="percent f-bold red">0%</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Transaction Count</dt>
              <dd class="f-midium">
                <span class="num">1</span>
                <span class="percent f-bold red">0%</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Today Sales</dt>
              <dd class="f-midium">
                <span class="num">LAK 10,000</span>
                <span class="percent f-bold red">-50%</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Today Supply Free</dt>
              <dd class="f-midium">
                <span class="num">LAK 10,000</span>
                <span class="percent f-bold green">50%</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Today Tax</dt>
              <dd class="f-midium">
                <span class="num">LAK 0</span>
                <span class="percent f-bold green">100%</span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import { Bar } from 'vue-chart-3';

export default defineComponent({
  components: { Bar },
  setup() {
    const testData = {
      labels: ['Sun', 'Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Sat'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5, 100, 20],
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED',
            '#77CEFF',
            '#0079AF',
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
