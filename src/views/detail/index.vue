/* eslint-disable import/no-unresolved */
<template>
  <div class="detail">
    <div class="content">
      <div class="left-content">
        <article class="article">
          <h1 class="article-title">{{ obj.title }}</h1>
          <div class="author-info">
            <img :src="obj.avatar" class="headImg" />
            <div class="author-info-box">
              <div class="author-name">{{ obj.username }}</div>
              <div class="meta-box">{{ obj.createTime }}</div>
            </div>
          </div>
          <div class="article-content" v-html="obj.content"></div>
        </article>
      </div>
      <div class="right-content"><Tip /></div>
    </div>
    <el-backtop />
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { useRouter } from 'vue-router'
// eslint-disable-next-line import/extensions
import { ref } from 'vue'
// eslint-disable-next-line import/extensions
import { getDetail } from '@/api/index'
import Tip from '@/components/tip.vue'

export default {
  components: {
    Tip
  },
  setup() {
    const obj = ref({})
    const router = useRouter()
    const { id } = router.currentRoute.value.query
    getDetail(id).then((res) => {
      obj.value = res
    })

    return {
      obj
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/style/common.less';

.detail {
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
      .article {
        padding: 20px;
        .article-title {
          margin: 0 0 20px;
          font-size: 24px;
          font-weight: 600;
          color: #252933;
        }
        .author-info {
          display: flex;
          align-items: center;
          .headImg {
            width: 40px;
            height: 40px;
            margin-right: 20px;
          }
          .author-info-box {
            flex: 1 1 auto;
            .author-name {
              display: inline-block;
              width: 100%;
              font-size: 16px;
              font-weight: 500;
              color: #515767;
              line-height: 24px;
            }
            .meta-box {
              font-size: 14px;
              color: #8a919f;
              line-height: 22px;
            }
          }
        }
        .article-content {
          ::v-deep p {
            color: #333;
            font-size: 16px;
            line-height: 22px;
          }
          ::v-deep img {
            width: 100%;
            height: auto;
          }
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
