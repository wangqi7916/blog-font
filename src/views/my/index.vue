<template>
  <div class="common">
    <headModule />
    my
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-unresolved
import headModule from '@/components/head.vue'

export default defineComponent({
  components: {
    headModule
  },
  // eslint-disable-next-line no-unused-vars
  setup(props, ctx) {}
})
</script>

<style lang="less"></style>
