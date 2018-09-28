<!--htmlDom结构-->
<template>
  <div id="app">
    <!--其他页面-->
    <el-container v-if="$route.meta.keepAlive">
      <el-header>
        <keep-alive>
          <!--导航栏-->
          <header-div></header-div>
        </keep-alive>
      </el-header>
      <el-container>
        <!--侧边栏-->
        <el-aside width="250px">
          <keep-alive>
            <Aside></Aside>
          </keep-alive>
        </el-aside>
        <el-main>
          <!--Body-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!--登录页-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<!--js逻辑-->
<script>
import HeaderDiv from './components/header'
import Aside from './components/aside'
export default {

  name: 'App',
  data (){
    return {
      logoMsg: 'WishWrong'
    }
  },
  components: {
    HeaderDiv,
    Aside
  }
}
// css样式
</script>

<style>

</style>


