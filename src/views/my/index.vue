<template>
  <div class="common">
    <Tip style="margin-top: 68px" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-unresolved
import Tip from '@/components/tip.vue'

export default defineComponent({
  components: {
    Tip
  }
})
</script>

<style lang="less"></style>
