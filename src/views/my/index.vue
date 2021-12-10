<template>
  <div class="common">
    <headModule />
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// eslint-disable-next-line import/no-unresolved
import headModule from '@/components/head.vue'

export default defineComponent({
  components: {
    headModule
  },
  // eslint-disable-next-line no-unused-vars
  setup(props, ctx) {
    const count = ref(0)
    const load = () => {
      count.value += 2
    }
    return {
      count,
      load
    }
  }
})
</script>

<style lang="less">
.infinite-list {
  height: 500px;
  padding: 0;
  margin: 0;
  list-style: none;

  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
    & + .list-item {
      margin-top: 10px;
    }
  }
}
</style>
