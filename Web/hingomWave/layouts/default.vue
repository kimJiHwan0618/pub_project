<template>
  <div>
    <nuxt id="body-content"/>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'h.WAVE Official Website'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },
  methods : {
    ThisProduct () {
      console.log("ThisProduct")
    }
  },
}
</script>
