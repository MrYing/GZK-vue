<template>
  <div id="gzkHeaderTop" style="box-sizing: border-box;position: relative">
    <p class="g-fl gzk_title">果真快 . 物流链平台管理</p>
    <div :class="'user_header_box fr'" >
      <Dropdown>
        <a href="javascript:void(0)">
         欢迎 {{uaername}}
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <router-link :to='{name:"gzkUserSet"}'><DropdownItem>个人设置</DropdownItem></router-link>
          <router-link :to='{name:"gzkUserPassword"}'><DropdownItem>修改密码</DropdownItem></router-link>
          <router-link :to='{name:"userLogin"}'><DropdownItem>退出</DropdownItem></router-link>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        uaername:"果真快"
      }
    },
    components: {},
    methods: {},
    mounted () {

    },
    watch: {}
  }

</script>
