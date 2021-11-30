<template>
  <div class="list-item">
    <!-- 标签 -->
    <div class="tab">
      <span>wq</span>
      <span>10天前</span>
      <span>面试</span>
    </div>
    <div class="content">
      <div class="desc">
        <h1 class="title">忘记 ajax，拥抱前后端一体化</h1>
        <p class="abstract">
          什么是前后端一体化、为什么要前后端一体化，究竟是造概念还是前端新趋势，本文从概念到实现原理去探讨这一新的主题，希望大家看完能对这一概念有一个清晰的认识。
        </p>
      </div>
      <img
        class="img"
        src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29092e57c0aa49be99cfdc7c8b3f5ae8~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/style/common.less';

.list-item {
  padding: 12px 20px 0;
  .tab {
    display: flex;
    line-height: 1;
    span {
      padding: 0 10px;
      font-size: 12px;
      border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
      cursor: pointer;
      color: @color-86909c;
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
  }
}
</style>
