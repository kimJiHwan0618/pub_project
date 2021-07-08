<template>
  <div class="page">
    <Header />
    <Navigation />
    <div class="page__wrap">
      <div class="page__wrap__inner">
        <div class="title__wrap management">
          <h2 class="f-midium page__title">Shop Registration</h2>
          <nuxt-link to="/shop/shop-registration" class="f-midium"
            >← List</nuxt-link
          >
        </div>
        <form action="">
          <div class="edit__form__wrap">
            <div class="edit__form__wrap__inner">
              <ul>
                <li>
                  <dl>
                    <dt>
                      <label for="shopCode" class="f-midium">Shop Code</label>
                    </dt>
                    <dd><input type="text" name="shopCode" id="shopCode" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="shopName" class="f-midium">Shop Name</label>
                    </dt>
                    <dd><input type="text" id="shopName" name="shopName" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="businType" class="f-midium"
                        >Business Type</label
                      >
                    </dt>
                    <dd>
                      <select name="businType" id="businType">
                        <option value="Any">Any</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Massage Shop">Massage Shop</option>
                      </select>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="tin" class="f-midium">TIN</label>
                    </dt>
                    <dd><input type="text" id="tin" name="tin" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="enterpriseID" class="f-midium"
                        >Enterprise ID</label
                      >
                    </dt>
                    <dd>
                      <input
                        type="text"
                        name="enterpriseID"
                        id="enterpriseID"
                      />
                    </dd>
                  </dl>
                </li>
                <li class="list__exempted">
                  <dl>
                    <dt>
                      <label for="exemptedTax" class="f-midium"
                        >Exempted Taxpayer</label
                      >
                    </dt>
                    <dd>
                      <input
                        type="checkbox"
                        id="exemptedTax"
                        name="exemptedTax"
                      />
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="representative" class="f-midium"
                        >Representative</label
                      >
                    </dt>
                    <dd>
                      <input
                        type="text"
                        id="representative"
                        name="representative"
                      />
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="mobilePhone" class="f-midium"
                        >Mobile Phone</label
                      >
                    </dt>
                    <dd>
                      <input type="text" id="mobilePhone" name="mobilePhone" />
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="phoneNumber" class="f-midium"
                        >Phone Number</label
                      >
                    </dt>
                    <dd>
                      <input type="text" id="phoneNumber" name="phoneNumber" />
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="nation" class="f-midium">Nation</label>
                    </dt>
                    <dd>
                      <select name="nation" id="nation">
                        <option value="Any">Any</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Massage Shop">Massage Shop</option>
                      </select>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="zipCode" class="f-midium">Zipcode</label>
                    </dt>
                    <dd><input type="text" id="zipCode" name="zipCode" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="province" class="f-midium">Province</label>
                    </dt>
                    <dd>
                      <select name="province" id="province">
                        <option value="Any">Any</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Massage Shop">Massage Shop</option>
                      </select>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="district" class="f-midium">District</label>
                    </dt>
                    <dd>
                      <select name="district" id="district">
                        <option value="Any">Any</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Massage Shop">Massage Shop</option>
                      </select>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="village" class="f-midium">Village</label>
                    </dt>
                    <dd>
                      <select name="village" id="village">
                        <option value="Any">Any</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Massage Shop">Massage Shop</option>
                      </select>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="address" class="f-midium">Address</label>
                    </dt>
                    <dd><input type="text" id="address" name="address" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="email" class="f-midium">Email</label>
                    </dt>
                    <dd><input type="eamil" name="email" id="email" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="website" class="f-midium">Website</label>
                    </dt>
                    <dd><input type="text" id="website" name="website" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label for="note" class="f-midium">Note</label>
                    </dt>
                    <dd><textarea name="note" id="note"></textarea></dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
          <div class="save__btn__wrap">
            <input type="submit" value="Save" class="f-midium" />
          </div>
        </form>
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
