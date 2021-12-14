<template>
  <div class="head">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="nav commonWidth">
      <ul class="navBar">
        <router-link to="/home" tag="li" class="li"> 首页 </router-link>
        <router-link to="/my" tag="li" class="li"> 我的初心 </router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 58px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .logo {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width: 100px;
    // height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .nav {
    margin: 0 auto;
    text-align: center;
    position: relative;
    .navBar {
      display: inline-block;
      .li {
        margin: 0 20px;
        line-height: 58px;
        font-size: 15px;
        font-weight: bold;
        float: left;
        color: #86909c;
        cursor: pointer;
      }
      .li:hover {
        color: #1e80ff;
      }
      .router-link-active,
      .router-link-exact-active {
        color: #1e80ff;
      }
    }
  }
}
</style>
