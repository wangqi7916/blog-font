<template>
  <div class="common">
    <headModule />
    <div class="content">
      <div class="left-content">
        <!-- 标签 -->
        <div class="tab">
          <span class="active">热门</span>
          <span>最新</span>
          <span>最热</span>
        </div>
        <!-- 列表 -->
        <div class="list-content">
          <list-item />
        </div>
      </div>
      <div class="right-content">bbb</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-unresolved
import headModule from '@/components/head.vue'
// eslint-disable-next-line import/no-unresolved
import ListItem from '@/components/list-item.vue'

export default defineComponent({
  components: {
    headModule,
    ListItem
  },
  // eslint-disable-next-line no-unused-vars
  setup(props, ctx) {}
})
</script>

<style lang="less" scoped>
@import '@/style/common.less';

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
      .tab {
        padding: 20px 30px;
        border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
        display: flex;
        line-height: 1;
        span {
          padding: 0 10px;
          font-size: 14px;
          border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
          cursor: pointer;
          color: @color-86909c;
          &.active {
            color: @color-1e80ff;
          }
        }
        span:hover {
          color: @color-1e80ff;
        }
      }
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
