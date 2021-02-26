<template>
  <div>
    <TheHeader />
    <div class="wrapper">
       <Nuxt class="container" />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

