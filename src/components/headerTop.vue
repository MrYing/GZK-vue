<template>
    <div id="gzkHeaderTop" style="box-sizing: border-box;position: relative">
        <p class="g-fl gzk_title">果真快 . 物流链平台管理</p>
        <div :class="'user_header_box fr'">
            <Dropdown>
                <div class="demo-avatar-badge g-fl" style="margin-right: 20px;" @click="avatar_messageInfo()">
                    <Badge count="1">
                        <Avatar shape="square" icon="person"/>
                    </Badge>
                </div>
                <a href="javascript:void(0)" class="f">
                    欢迎 {{getUser.nickName}}
                    <Icon type="arrow-down-b"></Icon>
                </a>

                <DropdownMenu slot="list">
                    <router-link :to='{name:"gzkUserSet"}'>
                        <DropdownItem>个人设置</DropdownItem>
                    </router-link>
                    <router-link :to='{name:"gzkUserPassword"}'>
                        <DropdownItem>修改密码</DropdownItem>
                    </router-link>
                    <div @click="autoUser()">
                        <DropdownItem>退出</DropdownItem>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default{
        data () {
            return {
                uaername: "果真快"
            }
        },
        components: {},
        computed: {
            ...mapGetters({
                    getUser: 'getUser'
                }
            )
        },
        methods: {
            ...mapActions({
                setLoginStatus:"setLoginStatus"
            }),
            autoUser(){
                this.$router.push({name: 'userLogin'})
                this.setLoginStatus({isLogin:false})
            },
            avatar_messageInfo(){
                this.$router.push({name: 'GzkWllMessageInfo'})
            }
        },

        mounted () {

        },
        watch: {}
    }

</script>
