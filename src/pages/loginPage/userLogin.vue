<template>
  <div id="gzk_userLogin">
   <!-- <canvasBg parentsClass='gzk_userLogin'
              :config='{
                distance : 70,
                radius : 50
              }'
    ></canvasBg>-->
    <div class="gzk_bg"></div>
    <div class="g_loginFrom" id="login_box">
      <div class="gzk_loginTitle" style="margin-bottom: 20px;color: #000">果真快 . 物流链管理</div>
      <div  style="margin: auto auto;">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user" >
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <p style="text-decoration:underline;margin-left: 120px;cursor: pointer"  @click="instance('info')">
            忘记密码?</p>
          <FormItem style="width: 100%;margin-top: 20px;">
            <Button style="margin-left: 40%" type="primary" @click="handleSubmit('formInline')">登录</Button>
            <!--<template>
              <Button  @click="instance('info')">忘记密码?</Button>
            </template>-->
          </FormItem>

        </Form>
      </div>
    </div>
  </div>
</template>
<script>
  import Local from 'local'

  /*import canvasBg from 'components/canvasBg';*/
  export default{
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    components: {
    /*  canvasBg*/
    },
    methods: {


      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!');
            this.$router.push({name:'userOnePassword'})
          } else {
            this.$Message.error('登录失败!');
          }
        })
      },
      instance (type) {
        const title = '忘记密码?';
        const content = '<p>拨打400-9982-860 联系客服 更改密码</p>';
        const okText='知道了';
        switch (type) {
          case 'info':
            this.$Modal.info({
              title: title,
              content: content,
              okText: okText
            });
            break;
          case 'success':
            this.$Modal.success({
              title: title,
              content: content
            });
            break;
          case 'warning':
            this.$Modal.warning({
              title: title,
              content: content
            });
            break;
          case 'error':
            this.$Modal.error({
              title: title,
              content: content
            });
            break;
        }
      }
    },
    mounted () {

    },
    watch: {}
  }

</script>
