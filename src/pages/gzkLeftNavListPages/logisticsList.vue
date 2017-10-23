<template>

  <div id="logisticsList" style=" background-color: #ffffff">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/logisticsList">物流单列表</BreadcrumbItem>
      </Breadcrumb>

    </div>
    <p style="text-align: center;font-size: 18px">物流单列表</p>
    <div style="height: 450px; overflow: auto;border: 1px  solid #ccc;width: 70%;margin: 0 auto">
      <div class="divList" @click='onclickItemInfo()' style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">车牌：145454455</p>
        <p style="text-align: center;width: 100%">更新位置：广州->北京</p>
        <p style="text-align: center;width: 100%">电话：1888888888</p>
      </div>
      <div class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>
      <div class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>
      <div class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>
      <div class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>
      <div class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>
      <div class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>
      <div class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>
      <div @click='onclickItemInfo()' class="divList" style="background-color: #ccc;margin-top: 10px;">
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
        <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
      </div>



    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {}
    },
    components: {},
    methods: {
      onclickItemInfo(){
        this.$router.push({name:'logisticsListItemInfo'})
      }
    },
    mounted () {

    },
    watch: {}
  }

</script>
