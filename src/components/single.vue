<template>
  <div class="single">
    <div class="content">
      <img src="../assets/head.jpeg" class="proImg" />
      <p class="name">Justjavascript</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'single'
})
</script>
<style lang="less" scoped>
.single {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  .content {
    width: 126px;
    .proImg {
      width: 100%;
      display: block;
    }
    .name {
      text-align: center;
      color: #86909c;
      font-weight: 600;
      margin: 0;
      padding-top: 4px;
    }
  }
}
</style>
