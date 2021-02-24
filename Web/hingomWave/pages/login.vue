<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',

  fetch ({ redirect }) {
    axios.get('/api/boot/opt/ipstack')
      .then(res => {
        redirect(`/${(res.data.country_code || 'EN').toLowerCase()}/login`)
      })
  }
}
</script>
