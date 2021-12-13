<template>
  <div class="common">
    <div class="content" v-infinite-scroll="load" infinite-scroll-distance="50">
      <div class="left-content">
        <!-- 标签 -->
        <div class="tab">
          <Tip />
          <!-- <span class="active">热门</span>
          <span>最新</span>
          <span>最热</span> -->
        </div>
        <!-- 列表 -->
        <Skeleton v-if="!(listData && listData.length)" />
        <list-item :listData="listData" />
        <div v-if="loading" class="loading-text">Loading...</div>
        <div v-if="noMore" class="loading-no-more">已经到底了...</div>
      </div>
      <div class="right-content"><Tip /></div>
    </div>
    <el-backtop />
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { defineComponent, reactive, toRefs } from 'vue'
import ListItem from '@/components/list-item.vue'
import Skeleton from '@/components/skeleton.vue'
import Tip from '@/components/tip.vue'

// eslint-disable-next-line import/extensions
import { getList } from '@/api/index'
// eslint-disable-next-line import/extensions
import dateStr from '@/utils/common'

export default defineComponent({
  components: {
    ListItem,
    Skeleton,
    Tip
  },
  // eslint-disable-next-line no-unused-vars
  setup(props, ctx) {
    const state: any = reactive({
      listData: null,
      page: 1,
      loading: true,
      noMore: false
    })
    const load = async () => {
      if (state.loading) {
        // 获取列表数据
        const data: any = await getList({
          page: state.page,
          size: 10
        })

        if (data && data.length === 10) {
          state.page += 1
        } else {
          state.loading = false
          state.noMore = true
        }
        data.forEach((item: any) => {
          // eslint-disable-next-line no-param-reassign
          item.transTime = dateStr(item.createTime)
        })

        state.listData = state.listData !== null ? state.listData.concat(data) : data
      }
    }

    return {
      ...toRefs(state),
      load
    }
  }
})
</script>

<style lang="less" scoped>
@import '@/style/common.less';

.common {
  overflow: auto;
  height: 100%;
  .content {
    position: relative;
    margin: 68px auto 0;
    width: 100%;
    max-width: 960px;
    .left-content {
      width: 700px;
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
      .loading-text,
      .loading-no-more {
        width: 100%;
        padding: 10px 0;
        text-align: center;
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
