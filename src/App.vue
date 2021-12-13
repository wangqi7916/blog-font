<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-unresolved
import headModule from '@/components/head.vue'

export default defineComponent({
  components: {
    headModule
  }
})
</script>

<template>
  <block>
    <headModule />
    <router-view></router-view>
  </block>
</template>

<style></style>
