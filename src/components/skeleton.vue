<template>
  <div class="skeleton skeleton-active">
    <div class="skeleton-content">
      <h3 class="skeleton-title" style="width: 50%"></h3>
      <ul class="skeleton-paragraph">
        <li class="skeleton-li"></li>
        <li class="skeleton-li"></li>
      </ul>
    </div>
    <div class="skeleton-header">
      <div class="img"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.skeleton {
  width: 100%;
  display: table;
  height: 104px;
  padding: 12px 20px 0;
  &.skeleton-active {
    .skeleton-content {
      .skeleton-title,
      .skeleton-paragraph .skeleton-li {
        background: linear-gradient(
          90deg,
          rgba(190, 190, 190, 0.2) 25%,
          rgba(129, 129, 129, 0.24) 37%,
          rgba(190, 190, 190, 0.2) 63%
        );
        background-size: 400% 100%;
        -webkit-animation: skeleton-loading 1.4s ease infinite;
        animation: skeleton-loading 1.4s ease infinite;
      }
    }
    .skeleton-header {
      .img {
        background: linear-gradient(
          90deg,
          rgba(190, 190, 190, 0.2) 25%,
          rgba(129, 129, 129, 0.24) 37%,
          rgba(190, 190, 190, 0.2) 63%
        );
        background-size: 400% 100%;
        -webkit-animation: skeleton-loading 1.4s ease infinite;
        animation: skeleton-loading 1.4s ease infinite;
      }
    }
  }
  .skeleton-header {
    display: table-cell;
    padding-left: 16px;
    vertical-align: top;
    .img {
      width: 120px;
      height: 80px;
      background: rgba(190, 190, 190, 0.2);
      border-radius: 2px;
    }
  }
  .skeleton-content {
    display: table-cell;
    width: 100%;
    vertical-align: top;
    .skeleton-title {
      width: 100%;
      height: 16px;
      background: rgba(190, 190, 190, 0.2);
      border-radius: 4px;
      margin: 0;
    }
    .skeleton-paragraph {
      padding: 0;
      margin-top: 20px;
      .skeleton-li {
        width: 100%;
        height: 16px;
        list-style: none;
        background: rgba(190, 190, 190, 0.2);
        border-radius: 4px;
        &:last-child {
          margin-top: 9px;
        }
      }
    }
  }
}

@-webkit-keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}
@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}
</style>
