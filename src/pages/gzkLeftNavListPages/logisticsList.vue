<template>
  <div id="logisticsList" class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/logisticsList">物流单</BreadcrumbItem>
        <BreadcrumbItem href="/logisticsList">物流单列表</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div style="margin: 0 auto;text-align: center" class="logisticsListCon">
      <div>
        <div class="inp_search clearFloat">
          <Input placeholder="输入关键字可查找信息"></Input>
          <span  @click="onClickNewLogistics()">新建物流单</span>
        </div>
      </div>
      <div class="logisticsListConList">
        <div class="ItemInfo" v-for="ItemInfo in logisticsListConList" @click="onclickItemInfo(ItemInfo)">
          <div class="g-fl" style="width: 90%">
            <p class="ItemInfo_title">
              <span class="icon_t">图标</span>
              <span class="fon_z">{{ItemInfo.text}}</span>
              <span>{{ItemInfo.text2}}</span>
            </p>
            <p class="bor_1"></p>
            <p class="ItemInfo_title">
              <span class="des_map">{{ItemInfo.text3}}</span>
              <span class="des_info">{{ItemInfo.text4}}</span>
              <span class="des_time">{{ItemInfo.text5}}</span>
            </p>
          </div>
          <span class="g-fr icon_jt">箭头</span>
        </div>
      </div>
      <div class="companySuperPage" style="width:80%;margin-top: 50px;">
        <div style="width: 80%;margin: 0 auto">
          <template>
            <Page :total="100" show-elevator></Page>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Local from 'local'
  export default{
    data () {
      return {
        logisticsListConList: [
          { text: '果真快科技有限公司',text2: '进行中',text3: '泰国-中国',text4: '10吨 荔枝',text5: '2017年12月21日' },
          { text: '果真快科技有限公司',text2: '进行中',text3: '泰国-中国',text4: '10吨 荔枝',text5: '2017年12月21日' },
          { text: '果真快科技有限公司',text2: '进行中',text3: '泰国-中国',text4: '10吨 荔枝',text5: '2017年12月21日' },
          { text: '果真快科技有限公司',text2: '进行中',text3: '泰国-中国',text4: '10吨 荔枝',text5: '2017年12月21日' },
          { text: '果真快科技有限公司',text2: '进行中',text3: '泰国-中国',text4: '10吨 荔枝',text5: '2017年12月21日' },
              ]
      }
    },
    components: {},
    methods: {

      onclickItemInfo(ItemInfo){
      Local.setItem('logisticsListConList',ItemInfo)
        this.$router.push({name:'logisticsListItemInfo'})
        /*页面参数获取*/

      },
      onClickNewLogistics(){
        this.$router.push({name:'newLogistics'})
      },
    },

    mounted () {

    },
    watch: {}
  }

</script>
