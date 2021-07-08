<template>
  <div class="realtime__wrap">
    <div class="chart__div realtime">
      <h3 class="f-midium">Realtime Sales</h3>
      <div class="chart">
        <LineChart :data="testData" />
        <ul class="chart__list">
          <li>
            <dl>
              <dt>Total Sales</dt>
              <dd class="f-midium">
                <span class="num">LAK 0</span>
                <span class="percent f-bold red">-50%</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Tax</dt>
              <dd class="f-midium">
                <span class="num">LAK 0</span>
                <span class="percent f-bold red">-50%</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Transaction Count</dt>
              <dd class="f-midium">
                <span class="num">5</span>
                <span class="percent f-bold green">+30%</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Transaction Error</dt>
              <dd class="f-midium">
                <span class="num">0</span>
                <span class="percent f-bold green">0%</span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <div class="chart__div realtime__sales__transaction">
      <div class="title__box">
        <h3 class="f-midium">Realtime Sales Transaction</h3>
        <a href="#">More</a>
      </div>
      <ul>
        <li>
          <dl>
            <dt>PSLA197C0001</dt>
            <dd class="f-midium">LAK 10,000</dd>
          </dl>
          <span>06/28/2021 09:53:40</span>
        </li>
        <li>
          <dl>
            <dt>PSLA197C0001</dt>
            <dd class="f-midium">LAK 10,000</dd>
          </dl>
          <span>06/28/2021 09:53:40</span>
        </li>
        <li>
          <dl>
            <dt>PSLA197C0001</dt>
            <dd class="f-midium">LAK 10,000</dd>
          </dl>
          <span>06/28/2021 09:53:40</span>
        </li>
        <li>
          <dl>
            <dt>PSLA197C0001</dt>
            <dd class="f-midium">LAK 10,000</dd>
          </dl>
          <span>06/28/2021 09:53:40</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import { Line as LineChart } from 'vue-chart-3';

export default defineComponent({
  components: { LineChart },
  setup() {
    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED',
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
