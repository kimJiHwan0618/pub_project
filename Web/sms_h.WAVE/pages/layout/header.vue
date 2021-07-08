<template>
  <header :class="navActive && 'active'">
    <div class="header__inner">
      <button @click="navIconClik()" class="menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="user__wrap">
        <li class="langauge">
          <ul>
            <li class="base__lang">
              <dl>
                <dt>
                  <img src="@/assets/img/nav/lang_en.jpg" alt="American flag" />
                </dt>
                <dd>En</dd>
              </dl>
            </li>
            <li class="lang__list">
              <ul>
                <li>
                  <dl>
                    <dt>
                      <img src="@/assets/img/nav/lang_lo.jpg" alt="flag" />
                    </dt>
                    <dd>Lo</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <img src="@/assets/img/nav/lang_th.jpg" alt="flag" />
                    </dt>
                    <dd>Th</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <img src="@/assets/img/nav/lang_kr.jpg" alt="flag" />
                    </dt>
                    <dd>Kr</dd>
                  </dl>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="notice">
          <span class="icon"></span>
          <span class="num f-bold">5</span>
          <ul class="notice__box">
            <h5 class="f-midium">Notifications</h5>
            <ul>
              <li v-for="list in testNoticeData" :key="list.title">
                <nuxt-link to="#">
                  <dl>
                    <dt>{{ list.title }}</dt>
                    <dd>
                      <p class="content">
                        {{ list.content }}
                      </p>
                      <p class="create__time f-midium">
                        {{ list.createdTime }}
                      </p>
                    </dd>
                  </dl>
                </nuxt-link>
              </li>
            </ul>
            <nuxt-link to="#" class="f-midium">View More...</nuxt-link>
          </ul>
        </li>
        <li class="admin__info">
          <dl>
            <dt class="icon">
              <img src="@/assets/img/nav/ic_hd_people.png" alt="user icon" />
            </dt>
            <dd>
              <span class="txt">admin name</span>
              <span class="arrow"></span>
            </dd>
          </dl>
          <ul class="user__menu">
            <li>
              <nuxt-link to="#">
                <span class="icon"></span>
                <span class="txt">Profile</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">
                <span class="icon"></span>
                <span class="txt">Menu 2</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">
                <span class="icon"></span>
                <span class="txt">Menu 3</span>
              </nuxt-link>
            </li>
            <li>
              <form action="">
                <input type="submit" value="Logout" />
              </form>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import { EventBus } from '@/utils/event-bus';
export default defineComponent({
  setup() {
    const navActive = ref(false);

    const navIconClik = () => {
      navActive.value ? (navActive.value = false) : (navActive.value = true);
      EventBus.$emit('navBarState', navActive.value);
    };

    EventBus.$on('navBarOff', state => {
      navActive.value = state;
    });

    const testNoticeData = [
      {
        title: 'Your order is placed',
        content: 'if several languages coalesce the grammar',
        createdTime: '3 min ago',
      },
      {
        title: 'James Lemire',
        content: 'It will seem like simplified English',
        createdTime: '1 hours ago',
      },
      {
        title: 'Your item is shipped',
        content: 'If several languages coalesce the grammar',
        createdTime: '3 min ago',
      },
      {
        title: 'Salena Layfield',
        content: 'As a skeptical Cambridge friend of mine occidental',
        createdTime: '1 hour ago',
      },
    ];

    return {
      navIconClik,
      navActive,
      testNoticeData,
    };
  },
});
</script>
