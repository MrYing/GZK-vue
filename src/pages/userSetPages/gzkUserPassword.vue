<template>
  <div id="gzkUserPassword">
   <div style="margin: 10px auto;width: 500px;">
     <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
     <FormItem label="旧密码" prop="name">
       <Input v-model="formValidate.name" placeholder="点击输入"></Input>
     </FormItem>
     <FormItem label="新密码" prop="mail">
       <Input v-model="formValidate.mail" placeholder="点击输入"></Input>
     </FormItem>
       <FormItem label="确认新密码" prop="mail2">
         <Input v-model="formValidate.mail2" placeholder="点击输入"></Input>
       </FormItem>
       <FormItem>
         <Button type="primary" @click="handleSubmit('formValidate')">提交保存</Button>
         <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置信息</Button>
       </FormItem>
     </Form>

   </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          mail2: '',
        },
        ruleValidate: {
          name: [
            { required: true, message: '请填写旧密码', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ],
          mail2: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ],

        }
      }
    },
    methods: {

      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {

              this.$Modal.confirm({
                title: 'Title',
                content: '<p>Content of dialog</p><p>Content of dialog</p>',
                onOk: () => {
                  this.$Message.info('Clicked ok');
                },
                onCancel: () => {
                  this.$Message.info('Clicked cancel');
                },


          });
            setTimeout(function () {
              this.$Modal.remove()
            }, 2000)



          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },

  confirm () {
        this.$Modal.confirm({
          title: 'Title',
          content: '<p>Content of dialog</p><p>Content of dialog</p>',

          onOk: () => {
            this.$Message.info('Clicked ok');
          },
          onCancel: () => {
            this.$Message.info('Clicked cancel');
          },

        });
      },
    },
    components: {},
    mounted () {

    },
    watch: {}
  }

</script>
