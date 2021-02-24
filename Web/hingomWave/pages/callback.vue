<template>
  <div></div>
</template>

<script>
export default {
  created () {
    const callback = new URLSearchParams(this.$route.hash)
    const params = {
      scheme: this.$auth.strategy.name,
      accessToken: callback.get('access_token')
    }

    this.$api.post('/api/auth/oauth2', params)
      .then(res => {
        const data = res.data

        if (data.isServerAuth) {
          this.$store.dispatch('user/updateToken', data)
          this.$store.dispatch('user/fetchUser')
        } else if (data.isSocialAuth) {
          this.$store.dispatch('user/updateUser', data)
          this.$router.push('/kr/signup')
        } else {
          this.$router.push('/kr/signup')
        }
      })
  }
}
</script>
