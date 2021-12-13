<template>
  <block>
    <div class="list-item" v-for="item in listData" :key="item.id" @click="jumpDetail(item.id)">
      <!-- 标签 -->
      <div class="tab">
        <span>{{ item.username }}</span>
        <span>{{ item.transTime }}</span>
        <!-- <span>面试</span> -->
      </div>
      <div class="content">
        <div class="desc">
          <h1 class="title">{{ item.title }}</h1>
          <p class="abstract">
            {{ item.desc }}
          </p>
        </div>
        <img class="img" :src="item.coverImg" />
      </div>
    </div>
  </block>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: { listData: Array },
  setup() {},
  methods: {
    jumpDetail(id: any) {
      this.$router.push({
        path: '/detail',
        query: { id }
      })
    }
  }
})
</script>
<style lang="less" scoped>
@import '@/style/common.less';

.list-item {
  padding: 12px 20px 0;
  cursor: pointer;
  .tab {
    display: flex;
    line-height: 1;
    span {
      padding: 0 10px;
      font-size: 12px;
      border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
      // cursor: pointer;
      color: @color-86909c;
      &:first-child {
        padding-left: 0;
      }
    }
  }
  .content {
    display: flex;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e6eb;
    margin-top: 10px;
    width: 100%;
    .desc {
      flex: 1 1 auto;
      .title {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: @color-1d2129;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      .abstract {
        color: @color-86909c;
        font-size: 13px;
        line-height: 22px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
    .img {
      flex: 0 0 auto;
      width: 120px;
      height: 80px;
      margin-left: 24px;
      background-color: #fff;
      border-radius: 2px;
    }
    &:last-child {
      border: none;
    }
  }
  &:hover {
    background: #fafafa;
  }
}
</style>

function jumpDetail(id: any) { throw new Error('Function not implemented.') } function
jumpDetail(id: any) { throw new Error('Function not implemented.') } function id(id: any) { throw
new Error('Function not implemented.') }
