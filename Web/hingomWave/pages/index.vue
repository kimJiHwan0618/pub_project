<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',

  fetch ({ redirect }) {
    axios.get('/api/boot/opt/ipstack')
      .then(res => {
        redirect(`/${(res.data.country_code || 'EN').toLowerCase()}`)
      })
      .catch(e => {
        console.log(e)
        redirect('/kr')
      })
  }
}
</script>
