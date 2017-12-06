<template>
  <div id="gzkUserSet">
    <div  style="margin:10px auto;width: 500px;">
      <div style="background-color: #c8c8c8;border-radius: 50%;height: 200px;width: 200px;margin-left: 50px;"></div>
      <Input v-model="formData.nickName" placeholder="请输入昵称..." style="width: 300px;margin-top: 20px;"></Input>
     <!-- <Button @click='savePhoto_clickHandler()'>保存</Button>-->
      <Button style="display: block;width: 300px;margin-top: 20px;" @click="submitUserInfo_clickHandler()" type="primary">保存</Button>
    </div>

    <div v-for='item in dataList'>
      <img :src="item.src" alt="" style='width: 100px;height: 100px;border: 1px solid red'>
      <span>{{item.desc}}</span>
    </div>



  </div>
</template>
<script>
  import {mapActions} from 'vuex';

  export default {
    data () {
      return {
        formData: {
          nickName: '',
          desc: '',
          container: ''
        },
        isShow:false,
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        imgName: '',
        desc: '',
        uploadList: [],
        dataList: []
      }
    },
    methods: {
      ...mapActions({
        setUser : 'setUser'
      }),
      submitUserInfo_clickHandler(){
        let user = Object.assign({},this.formData)
        this.setUser(user)
      }
    },
    mounted () {

    }
  }
</script>
<style>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
