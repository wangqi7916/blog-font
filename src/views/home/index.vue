<template>
  <div class="common">
    <headModule />
    <div class="content">
      <div class="left-content">aaaa</div>
      <div class="right-content">bbb</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import headModule from '@/components/head.vue'
export default defineComponent({
  components: {
    headModule
  },
  setup(props, ctx) {}
})
</script>

<style lang="less" scoped>
.common {
  .content {
    position: relative;
    margin: 68px auto 0;
    width: 100%;
    max-width: 960px;
    .left-content {
      width: 700px;
      height: 200px;
      background: #fff;
      margin-right: 30px;
    }
    .right-content {
      min-width: 230px;
      height: 200px;
      background: #fff;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
    @media (max-width: 960px) {
      .left-content {
        width: 100%;
      }
      .right-content {
        display: none;
      }
    }
  }
}
</style>
