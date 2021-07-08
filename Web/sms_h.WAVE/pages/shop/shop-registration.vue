<template>
  <div class="page">
    <Header />
    <Navigation />
    <div class="page__wrap">
      <div class="page__wrap__inner">
        <div class="title__wrap management">
          <h2 class="f-midium page__title">Shop Registration</h2>
          <nuxt-link to="/shop/edit" class="f-midium">+ Create</nuxt-link>
        </div>
        <div class="search__wrap">
          <div class="search__box">
            <h3 class="f-midium">Shop Search</h3>
            <form action="">
              <ul>
                <li>
                  <dl>
                    <dt>
                      <label class="f-midium" for="">Province</label>
                    </dt>
                    <dd>
                      <select name="" id="">
                        <option value="ອັດຕະປື(LA-AT)">ອັດຕະປື(LA-AT)</option>
                        <option value="ບໍແກ້ວ(LA-BK)">ບໍແກ້ວ(LA-BK)</option>
                        <option value="ບໍລິຄຳໄຊ(LA-BL)">ບໍລິຄຳໄຊ(LA-BL)</option>
                        <option value="ຈຳປາສັກ(LA-CH)">ຈຳປາສັກ(LA-CH)</option>
                        <option value="ຫົວພັນ(LA-HO)">ຫົວພັນ(LA-HO)</option>
                        <option value="ຄຳມວນ(LA-KH)">ຄຳມວນ(LA-KH)</option>
                        <option value="ຫຼວງນໍ້າທາ(LA-LN)"
                          >ຫຼວງນໍ້າທາ(LA-LN)</option
                        >
                        <option value="ຫຼວງພະບາງ(LA-LP)"
                          >ຫຼວງພະບາງ(LA-LP)</option
                        >
                        <option value="ອຸດົມໄຊ(LA-OU)">ອຸດົມໄຊ(LA-OU)</option>
                        <option value="ພົງສາລີ(LA-PH)">ພົງສາລີ(LA-PH)</option>
                        <option value="ສາລະວັນ(LA-SL)">ສາລະວັນ(LA-SL)</option>
                        <option value="ສະຫວັນນະເຂດ(LA-SV)"
                          >ສະຫວັນນະເຂດ(LA-SV)</option
                        >
                        <option value="ແຂວງວຽງຈັນ(LA-VI)"
                          >ແຂວງວຽງຈັນ(LA-VI)</option
                        >
                        <option value="ນະຄອນຫຼວງວຽງຈັນ(LA-VT)"
                          >ນະຄອນຫຼວງວຽງຈັນ(LA-VT)</option
                        >
                        <option value="ໄຊຍະບູລີ(LA-XA)">ໄຊຍະບູລີ(LA-XA)</option>
                        <option value="ໄຊສົມບູນ(LA-XB)">ໄຊສົມບູນ(LA-XB)</option>
                        <option value="ເຊກອງ(LA-XE)">ເຊກອງ(LA-XE)</option>
                        <option value="ຊຽງແຂວງ(LA-XI)">ຊຽງແຂວງ(LA-XI)</option>
                      </select>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label class="f-midium" for="">Shop Name</label>
                    </dt>
                    <dd><input type="text" placeholder="Shop Name" /></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <label class="f-midium" for="">Business Type</label>
                    </dt>
                    <dd>
                      <select name="" id="">
                        <option value="Any">Any</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Massage Shop">Massage Shop</option>
                      </select>
                    </dd>
                  </dl>
                </li>
                <li>
                  <input type="submit" value="Apply" class="f-midium" />
                </li>
              </ul>
            </form>
          </div>
          <div class="table__box">
            <h3 class="f-midium">
              <dl>
                <dt>Search Result :&nbsp;</dt>
                <dd class="f-bold">{{ testData.length }}</dd>
              </dl>
            </h3>
            <div class="table__box__inner">
              <table>
                <thead>
                  <tr>
                    <th class="f-midium">Shop Code</th>
                    <th class="f-midium">Shop Name</th>
                    <th class="f-midium">Business Type</th>
                    <th class="f-midium">TIN</th>
                    <th class="f-midium">Enterprise ID</th>
                    <th class="f-midium">Representative</th>
                    <th class="f-midium">Mobile Phone</th>
                    <th class="f-midium">Phone Number</th>
                    <th class="f-midium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="list in testData" :key="list.shopCode">
                    <td>
                      <nuxt-link to="/shop/edit">{{ list.shopCode }}</nuxt-link>
                    </td>
                    <td>{{ list.shopName }}</td>
                    <td>{{ list.businessType }}</td>
                    <td>{{ list.tin }}</td>
                    <td>{{ list.enterpriseId }}</td>
                    <td>{{ list.representative }}</td>
                    <td>{{ list.mobilePhone }}</td>
                    <td>{{ list.phoneNumber }}</td>
                    <td>
                      <button>Delete</button>
                      <button>Modify</button>
                      <button>Refresh</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
    const testData = [
      {
        shopCode: 'ST19000004',
        shopName: '3j Minimart',
        businessType: 'Mart',
        tin: '695095289-0-01',
        enterpriseId: '01B/03-0001733',
        representative: 'ນາງ ມະໂນລາ ສິດທິຍົມ',
        mobilePhone: '02099668844',
        phoneNumber: '02099668844',
      },
      {
        shopCode: 'ST19000005',
        shopName: 'Yok Po Noodles',
        businessType: 'Restaurant',
        tin: '1',
        enterpriseId: '015293739',
        representative: 'ນາງ ປານທອງ',
        mobilePhone: '85621217675',
        phoneNumber: '85621217675',
      },
      {
        shopCode: 'ST19000006',
        shopName: 'Patu Xay Cafe & Restaurant',
        businessType: 'Restaurant',
        tin: '1',
        enterpriseId: '	01B/03-0001733',
        representative: 'Somsanook Saysanavongphet',
        mobilePhone: '02058816661',
        phoneNumber: '02058816662',
      },
    ];

    return {
      testData,
    };
  },
});
</script>
