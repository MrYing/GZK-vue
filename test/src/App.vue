<template>
  <div id="app" style="min-width: 900px;background-color: #eeeeee">
    <div :class=" 'main_box' "  id="main_box" >
      <MainNavLeft></MainNavLeft>
      <HeaderTop></HeaderTop>
      <div id="gzk_editor">
        <router-view></router-view>
      </div>

      <!-- <keep-alive exclude="enroll">
         <router-view v-if="$route.meta.keepAlive"></router-view>
       </keep-alive>
       <router-view v-if="!$route.meta.keepAlive"></router-view>-->
    </div>
    <div style="    width: 100%;
    height: 30px;
    position: fixed;
    bottom: 0px;
    background-color: #f0f0f0;">
      <p style="    font-size: 0.8rem;
    text-align: center;
    border-top: solid 1px #f9f9f9;
    line-height: 2;">
        CopyRight @ 广州果真快信息科技有限公司
      </p>
    </div>
  </div>
</template>

<script>
  /*在哪个地方使用组件 在哪引用*/
  import MainNavLeft from './components/menuNavLeft';
  import HeaderTop from './components/headerTop';


export default {
  name: 'app',
  data() {
    return{

    /*  main_box: true,
      clearfix: false*/


    }
  },
  /*components 注册 */
  components: {
    MainNavLeft,HeaderTop
  },
  computed: {

  },
}
</script>

<style>



</style>
