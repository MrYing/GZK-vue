<template>
    <div id="home" style="text-align: center">
      欢迎来到 果真快物流链平台管理
      <br>
      开始你的操作吧！
    </div>
</template>
<script>
  import selfGZKMsgCtrl from 'getDataApi/index';
  import GetMsg from 'getDataApi/doMsg';
  export default{
    data () {
      return {}
    },
    components: {},
    methods: {},
    mounted () {

    },
    created(){
      console.log("sdd",aaaa)

      selfGZKMsgCtrl.doBindMsg(144, (data)=>{
        console.log('执行了',data)



      });
      selfGZKMsgCtrl.doSendAppMsg(GetMsg.doGetMsg_144(0))
    },
    watch: {}
  }

</script>
