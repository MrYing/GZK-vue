<template>

  <div id="logisticsListItemInfo" style="height: 700px; overflow: auto" >
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/logisticsList">物流单列表</BreadcrumbItem>
        <BreadcrumbItem>物流单详情</BreadcrumbItem>
      </Breadcrumb>

    </div>

    <div class="logisticsListFrom clearFloat"  style="margin: 20px;background-color: #ffffff;padding: 10px;">
      <div style="float: left;width: 40%">
        <Form :model="formItem" :label-width="80">
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
          </FormItem>
          <Button type="success" long>保存</Button>
          </FormItem>
        </Form>
      </div>
      <div style="float: left;">
        <p style="text-align: center;margin-left: 50%;"></p>
        <p style="text-align: center;margin-left: 50%;"></p>
      </div>
      <div style="float: right;width: 50%;">
        <div style="height: 450px; overflow: auto;">
          <p style="text-align: center;font-size: 18px;">物流单更改记录</p>
          <div class="divList" style="margin: 20px;background-color: #eee;margin-top: 10px;padding: 10px;">
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">车牌：145454455</p>
            <p style="text-align: center;width: 100%">更新位置：广州->北京</p>
            <p style="text-align: center;width: 100%">电话：1888888888</p>

          </div>
          <div class="divList" style="margin: 20px;background-color: #eee;margin-top: 10px;padding: 10px;">
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
          </div>
          <div class="divList" style="margin: 20px;background-color: #eee;margin-top: 10px;padding: 10px;">
            <p style="text-align: center">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
          </div>
          <div class="divList" style="margin: 20px;background-color: #eee;margin-top: 10px;padding: 10px;">
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
          </div>
          <div class="divList" style="margin: 20px;background-color: #eee;margin-top: 10px;padding: 10px;">
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
            <p style="text-align: center;width: 100%">中国-河口-陈小姐 更新时间：2017年12月21日</p>
          </div>
        </div>
        <div style="padding: 20px;">
          <Button style="float: left" type="info" @click="modal1 = true">补充</Button>
          <Modal id="logisticsPushImgShow"
            v-model="modal1"
            title="选择补充信息"
            @on-ok="ok"
            @on-cancel="cancel">
            <p @click="logisticsPushImg()" style="text-align: center;margin-top: 20px;">补充上传图片</p>
            <p style="text-align: center;margin-top: 20px;" >补充越南关口信息</p>
            <p style="text-align: center;margin-top: 20px;">补充泰国关口信息</p>
          </Modal>
          <Button style="float: right"  @click="modal2 = true" type="info">作废</Button>
          <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
              <Icon type="information-circled"></Icon>
              <span></span>
            </p>
            <div style="text-align:center">
              <p>是否继续作废？</p>
            </div>
          </Modal></div>

        <div>
        </div>

      </div>
    </div>
  </div>



</template>
<style>
  #logisticsListItemInfo{

  }


</style>
<script>
  export default{
    data () {
      return {
        modal2: false,
        modal1: false,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }

    },
    components: {},
    methods: {
      logisticsPushImg(){
        this.$router.push({name:'logisticsPushImg'})
      },
      del () {
        this.modal_loading = true;
        setTimeout(() => {
          this.modal_loading = false;
          this.modal2 = false;
          this.$Message.success('作废成功');
        }, 2000);
      },
      ok () {
      /*  this.$Message.info('点击了确定');*/
      },
      cancel () {
        /*this.$Message.info('点击了取消');*/
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    },
    mounted () {

    },
    watch: {}
  }

</script>
